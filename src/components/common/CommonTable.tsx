import React, { useMemo } from 'react';
import { Table, TableProps } from 'antd';
import type { ColumnsType, TablePaginationConfig } from 'antd/es/table';
import type { FilterValue, SorterResult } from 'antd/es/table/interface';
import { useAppStore } from '../../store/appStore';

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
  const isDark = useAppStore((state) => state.isDark);

  const tableClassName = useMemo(() => {
    return [
      'common-table',
      isDark ? 'ant-table-dark' : '',
      className,
    ].filter(Boolean).join(' ');
  }, [isDark, className]);

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
