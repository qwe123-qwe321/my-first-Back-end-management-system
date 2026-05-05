// 通用表格组件：基于Ant Design Table封装的标准化表格，统一配置分页、列定义、空状态和加载样式，减少重复代码
import { useMemo } from 'react';
import { Table } from 'antd';
import type { TableProps, ColumnsType, TablePaginationConfig } from 'antd/es/table';
import type { FilterValue, SorterResult } from 'antd/es/table/interface';

export interface CommonTableProps<T extends object = object> {
  columns: ColumnsType<T>;
  dataSource?: T[];
  loading?: boolean;
  pagination?: TablePaginationConfig | false;
  rowKey?: string | ((record: T) => string);
  onChange?: (
    pagination: TablePaginationConfig,
    filters: Record<string, FilterValue | null>,
    sorter: SorterResult<T> | SorterResult<T>[]
  ) => void;
  onRow?: TableProps<T>['onRow'];
  size?: 'small' | 'middle' | 'large';
  scroll?: { x?: number | string; y?: number | string };
  className?: string;
  bordered?: boolean;
  rowSelection?: TableProps<T>['rowSelection'];
}

export function CommonTable<T extends object = object>({
  columns,
  dataSource = [],
  loading = false,
  pagination = false,
  rowKey = 'id',
  onChange,
  onRow,
  size = 'middle',
  scroll,
  className = '',
  bordered = false,
  rowSelection,
}: CommonTableProps<T>) {
  const tableClassName = useMemo(() => {
    return [
      'common-table',
      className,
    ].filter(Boolean).join(' ');
  }, [className]);

  return (
    <Table<T>
      columns={columns}
      dataSource={dataSource}
      loading={loading}
      pagination={pagination}
      rowKey={rowKey}
      onChange={onChange}
      onRow={onRow}
      size={size}
      scroll={scroll}
      className={tableClassName}
      bordered={bordered}
      rowSelection={rowSelection}
      style={{
        borderRadius: '8px',
        overflow: 'hidden',
      }}
    />
  );
}

export default CommonTable;
