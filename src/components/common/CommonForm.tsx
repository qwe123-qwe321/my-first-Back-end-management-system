import { useCallback } from 'react';
import { Form, Button, Space } from 'antd';
import type { FormProps } from 'antd';

export interface CommonFormProps<T = unknown> extends Omit<FormProps<T>, 'layout' | 'children'> {
  layout?: 'horizontal' | 'vertical' | 'inline';
  loading?: boolean;
  submitText?: string;
  cancelText?: string;
  showActions?: boolean;
  onSubmit?: (values: T) => void;
  onCancel?: () => void;
  children?: React.ReactNode;
}

export function CommonForm<T = unknown>({
  layout = 'vertical',
  loading = false,
  submitText = '提交',
  cancelText = '取消',
  showActions = true,
  onSubmit,
  onCancel,
  children,
  ...formProps
}: CommonFormProps<T>) {
  const [form] = Form.useForm<T>();

  const handleSubmit = useCallback((values: T) => {
    onSubmit?.(values);
  }, [onSubmit]);

  const handleReset = useCallback(() => {
    form.resetFields();
    onCancel?.();
  }, [form, onCancel]);

  return (
    <Form<T>
      form={form}
      layout={layout}
      onFinish={handleSubmit}
      className="common-form"
      style={{
        maxWidth: layout === 'inline' ? 'none' : 600,
      }}
      {...formProps}
    >
      {children}

      {showActions && (
        <Form.Item
          className={layout === 'inline' ? 'mb-0!' : ''}
          style={layout !== 'inline' ? { marginTop: 24 } : undefined}
        >
          <Space>
            <Button
              type="primary"
              htmlType="submit"
              loading={loading}
            >
              {submitText}
            </Button>
            <Button onClick={handleReset}>
              {cancelText}
            </Button>
          </Space>
        </Form.Item>
      )}
    </Form>
  );
}

export default CommonForm;
