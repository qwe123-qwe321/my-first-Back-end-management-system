import { message, notification } from 'antd';
import type { NotificationArgsProps } from 'antd';

type MessageType = 'success' | 'error' | 'info' | 'warning' | 'loading';

interface UseMessageReturn {
  message: {
    show: (type: MessageType, content: string, duration?: number) => void;
    success: (content: string, duration?: number) => void;
    error: (content: string, duration?: number) => void;
    info: (content: string, duration?: number) => void;
    warning: (content: string, duration?: number) => void;
    loading: (content: string, duration?: number) => Promise<() => void>;
  };
  notification: {
    show: (props: NotificationArgsProps) => void;
    success: (title: string, description?: string) => void;
    error: (title: string, description?: string) => void;
    info: (title: string, description?: string) => void;
    warning: (title: string, description?: string) => void;
  };
  contextHolder: JSX.Element;
  notificationContextHolder: JSX.Element;
}

export const useMessage = (): UseMessageReturn => {
  const [messageApi, contextHolder] = message.useMessage();
  const [notificationApi, notificationContextHolder] = notification.useNotification();

  const messageUtil = {
    show: (type: MessageType, content: string, duration = 3) => {
      const methods: Record<MessageType, (msg: string, dur: number) => void> = {
        success: messageApi.success,
        error: messageApi.error,
        info: messageApi.info,
        warning: messageApi.warning,
        loading: messageApi.loading,
      };
      methods[type](content, duration);
    },
    success: (content: string, duration = 3) => {
      messageApi.success(content, duration);
    },
    error: (content: string, duration = 3) => {
      messageApi.error(content, duration);
    },
    info: (content: string, duration = 3) => {
      messageApi.info(content, duration);
    },
    warning: (content: string, duration = 3) => {
      messageApi.warning(content, duration);
    },
    loading: async (content: string, duration = 0): Promise<() => void> => {
      return messageApi.loading(content, duration);
    },
  };

  const notificationUtil = {
    show: (props: NotificationArgsProps) => {
      notificationApi.open(props);
    },
    success: (title: string, description?: string) => {
      notificationApi.success({ message: title, description });
    },
    error: (title: string, description?: string) => {
      notificationApi.error({ message: title, description });
    },
    info: (title: string, description?: string) => {
      notificationApi.info({ message: title, description });
    },
    warning: (title: string, description?: string) => {
      notificationApi.warning({ message: title, description });
    },
  };

  return {
    message: messageUtil,
    notification: notificationUtil,
    contextHolder,
    notificationContextHolder,
  };
};
