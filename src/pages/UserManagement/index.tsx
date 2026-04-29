import { useState, useMemo } from 'react';
import {
  useReactTable,
  getCoreRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  getFilteredRowModel,
  flexRender,
} from '@tanstack/react-table';
import type { SortingState, ColumnDef, RowSelectionState } from '@tanstack/react-table';
import { ChevronDown, Plus, Trash2, Search, Edit2, CheckSquare, Square } from 'lucide-react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '../../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/card';
import { userFormSchema, type UserFormValues } from '../../schemas/userSchema';
import type { UserData } from '../../mocks/handlers';

const fetchUsers = async (): Promise<UserData[]> => {
  const res = await fetch('/api/users');
  const data = await res.json();
  return data.data;
};

const createUser = async (user: UserFormValues): Promise<UserData> => {
  const res = await fetch('/api/users', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(user),
  });
  const data = await res.json();
  return data.data;
};

const updateUser = async (user: UserFormValues & { id: number }): Promise<UserData> => {
  const { id, ...rest } = user;
  const res = await fetch(`/api/users/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(rest),
  });
  const data = await res.json();
  return data.data;
};

const deleteUser = async (id: number): Promise<number> => {
  const res = await fetch(`/api/users/${id}`, { method: 'DELETE' });
  const data = await res.json();
  return data.id;
};

const batchDeleteUsers = async (ids: number[]): Promise<number[]> => {
  const res = await fetch('/api/users/batch-delete', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ ids }),
  });
  const data = await res.json();
  return data.ids;
};

type DialogMode = 'create' | 'edit' | null;

export default function UserManagement() {
  const queryClient = useQueryClient();
  const [search, setSearch] = useState('');
  const [sorting, setSorting] = useState<SortingState>([]);
  const [rowSelection, setRowSelection] = useState<RowSelectionState>({});
  const [dialogMode, setDialogMode] = useState<DialogMode>(null);
  const [editingUser, setEditingUser] = useState<UserData | null>(null);

  const { data: users = [], isLoading } = useQuery({
    queryKey: ['users'],
    queryFn: fetchUsers,
  });

  const createMutation = useMutation({
    mutationFn: createUser,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['users'] });
      setDialogMode(null);
      form.reset();
    },
  });

  const updateMutation = useMutation({
    mutationFn: updateUser,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['users'] });
      setDialogMode(null);
      setEditingUser(null);
      form.reset();
    },
  });

  const deleteMutation = useMutation({
    mutationFn: deleteUser,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['users'] });
    },
  });

  const batchDeleteMutation = useMutation({
    mutationFn: batchDeleteUsers,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['users'] });
      setRowSelection({});
    },
  });

  const form = useForm<UserFormValues>({
    resolver: zodResolver(userFormSchema),
    defaultValues: {
      name: '',
      email: '',
      role: 'user',
      status: 'active',
    },
  });

  const selectedIds = useMemo(
    () => Object.keys(rowSelection).map(Number),
    [rowSelection]
  );

  const columns = useMemo<ColumnDef<UserData>[]>(
    () => [
      {
        id: 'select',
        header: ({ table }) => (
          <div
            onClick={() => {
              table.toggleAllRowsSelected();
            }}
            className="p-1 hover:bg-gray-100 rounded cursor-pointer inline-block"
          >
            {table.getIsAllRowsSelected() ? (
              <CheckSquare className="w-4 h-4" />
            ) : (
              <Square className="w-4 h-4" />
            )}
          </div>
        ),
        cell: ({ row }) => (
          <div
            onClick={() => row.toggleSelected()}
            className="p-1 hover:bg-gray-100 rounded cursor-pointer inline-block"
          >
            {row.getIsSelected() ? (
              <CheckSquare className="w-4 h-4" />
            ) : (
              <Square className="w-4 h-4" />
            )}
          </div>
        ),
        size: 50,
      },
      {
        accessorKey: 'id',
        header: 'ID',
        size: 60,
      },
      {
        accessorKey: 'name',
        header: '姓名',
        size: 120,
      },
      {
        accessorKey: 'email',
        header: '邮箱',
        size: 200,
      },
      {
        accessorKey: 'role',
        header: '角色',
        size: 100,
        cell: (info) => {
          const role = info.getValue() as string;
          const colors: Record<string, string> = {
            admin: 'bg-red-100 text-red-800',
            editor: 'bg-blue-100 text-blue-800',
            user: 'bg-gray-100 text-gray-800',
          };
          const labels: Record<string, string> = {
            admin: '管理员',
            editor: '编辑',
            user: '用户',
          };
          return (
            <span className={`px-2 py-1 rounded text-xs ${colors[role] || 'bg-gray-100'}`}>
              {labels[role] || role}
            </span>
          );
        },
      },
      {
        accessorKey: 'status',
        header: '状态',
        size: 80,
        cell: (info) => {
          const status = info.getValue() as string;
          const isActive = status === 'active';
          return (
            <span
              className={`px-2 py-1 rounded text-xs ${
                isActive
                  ? 'bg-green-100 text-green-800'
                  : 'bg-gray-100 text-gray-500'
              }`}
            >
              {isActive ? '活跃' : '停用'}
            </span>
          );
        },
      },
      {
        accessorKey: 'createdAt',
        header: '创建时间',
        size: 120,
      },
      {
        id: 'actions',
        header: '操作',
        size: 140,
        cell: (info) => (
          <div className="flex gap-2">
            <Button
              variant="ghost"
              size="sm"
              className="text-blue-600 hover:text-blue-700 hover:bg-blue-50"
              onClick={() => {
                setEditingUser(info.row.original);
                form.reset({
                  name: info.row.original.name,
                  email: info.row.original.email,
                  role: info.row.original.role,
                  status: info.row.original.status,
                });
                setDialogMode('edit');
              }}
            >
              <Edit2 className="w-4 h-4" />
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="text-red-600 hover:text-red-700 hover:bg-red-50"
              onClick={() => deleteMutation.mutate(info.row.original.id)}
            >
              <Trash2 className="w-4 h-4" />
            </Button>
          </div>
        ),
      },
    ],
    [deleteMutation, form]
  );

  // eslint-disable-next-line react-hooks/incompatible-library
  const table = useReactTable({
    data: users,
    columns,
    state: { sorting, globalFilter: search, rowSelection },
    onSortingChange: setSorting,
    onGlobalFilterChange: setSearch,
    onRowSelectionChange: setRowSelection,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    initialState: {
      pagination: { pageSize: 10 },
    },
  });

  const onSubmit = (values: UserFormValues) => {
    if (dialogMode === 'edit' && editingUser) {
      updateMutation.mutate({ ...values, id: editingUser.id });
    } else {
      createMutation.mutate(values);
    }
  };

  const handleBatchDelete = () => {
    if (selectedIds.length > 0) {
      batchDeleteMutation.mutate(selectedIds);
    }
  };

  const inputClass = 'w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white border-gray-300';

  return (
    <div className="p-6 space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <h1 className="text-2xl font-bold text-gray-900">
          用户管理
        </h1>
        <div className="flex items-center gap-3">
          {selectedIds.length > 0 && (
            <Button
              variant="destructive"
              onClick={handleBatchDelete}
              disabled={batchDeleteMutation.isPending}
            >
              <Trash2 className="w-4 h-4 mr-2" />
              批量删除 ({selectedIds.length})
            </Button>
          )}
          <Button
            onClick={() => {
              form.reset();
              setEditingUser(null);
              setDialogMode('create');
            }}
          >
            <Plus className="w-4 h-4 mr-2" />
            新增用户
          </Button>
        </div>
      </div>

      <Card className="bg-white">
        <CardHeader className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-2">
          <CardTitle className="text-gray-900">
            用户列表
          </CardTitle>
          <div className="relative w-full sm:w-64">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="搜索用户..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white border-gray-300"
            />
          </div>
        </CardHeader>
        <CardContent>
          {isLoading ? (
            <div className="flex justify-center py-12 text-gray-600">
              加载中...
            </div>
          ) : (
            <>
              <div className="overflow-x-auto border rounded-lg">
                <table className="w-full text-sm text-left">
                  <thead className="text-xs uppercase bg-gray-50 text-gray-500">
                    {table.getHeaderGroups().map((headerGroup) => (
                      <tr key={headerGroup.id}>
                        {headerGroup.headers.map((header) => (
                          <th
                            key={header.id}
                            className="px-4 py-3"
                            style={{ width: header.getSize() }}
                          >
                            {header.isPlaceholder ? null : (
                              <div
                                className={`flex items-center gap-1 font-medium ${
                                  header.column.getCanSort() ? 'cursor-pointer select-none hover:text-gray-700' : ''
                                }`}
                                onClick={header.column.getToggleSortingHandler()}
                              >
                                {flexRender(
                                  header.column.columnDef.header,
                                  header.getContext()
                                )}
                                {header.column.getIsSorted() && (
                                  <ChevronDown
                                    className={`w-4 h-4 transition-transform ${
                                      header.column.getIsSorted() === 'desc' ? 'rotate-180' : ''
                                    }`}
                                  />
                                )}
                              </div>
                            )}
                          </th>
                        ))}
                      </tr>
                    ))}
                  </thead>
                  <tbody className="bg-white">
                    {table.getRowModel().rows.map((row) => (
                      <tr
                        key={row.id}
                        className={`border-b transition-colors ${
                          row.getIsSelected()
                            ? 'bg-blue-50'
                            : 'border-gray-200'
                        }`}
                      >
                        {row.getVisibleCells().map((cell) => (
                          <td
                            key={cell.id}
                            className="px-4 py-3 text-gray-900"
                            style={{ width: cell.column.getSize() }}
                          >
                            {flexRender(cell.column.columnDef.cell, cell.getContext())}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="flex items-center justify-end space-x-2 py-4">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => table.previousPage()}
                  disabled={!table.getCanPreviousPage()}
                >
                  上一页
                </Button>
                <span className="text-sm text-gray-600">
                  第 {table.getState().pagination.pageIndex + 1} 页 / 共 {table.getPageCount()} 页
                </span>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => table.nextPage()}
                  disabled={!table.getCanNextPage()}
                >
                  下一页
                </Button>
              </div>
            </>
          )}
        </CardContent>
      </Card>

      {dialogMode && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <Card className="w-full max-w-md mx-4 bg-white">
            <CardHeader>
              <CardTitle className="text-gray-900">
                {dialogMode === 'edit' ? '编辑用户' : '新增用户'}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-1 text-gray-700">
                    姓名
                  </label>
                  <input
                    {...form.register('name')}
                    className={inputClass}
                    placeholder="请输入姓名"
                  />
                  {form.formState.errors.name && (
                    <p className="text-red-500 text-sm mt-1">
                      {form.formState.errors.name.message}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1 text-gray-700">
                    邮箱
                  </label>
                  <input
                    type="email"
                    {...form.register('email')}
                    className={inputClass}
                    placeholder="请输入邮箱"
                  />
                  {form.formState.errors.email && (
                    <p className="text-red-500 text-sm mt-1">
                      {form.formState.errors.email.message}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1 text-gray-700">
                    角色
                  </label>
                  <select
                    {...form.register('role')}
                    className={inputClass}
                  >
                    <option value="admin">管理员</option>
                    <option value="editor">编辑</option>
                    <option value="user">普通用户</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1 text-gray-700">
                    状态
                  </label>
                  <select
                    {...form.register('status')}
                    className={inputClass}
                  >
                    <option value="active">活跃</option>
                    <option value="inactive">停用</option>
                  </select>
                </div>

                <div className="flex gap-3 pt-4">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => {
                      setDialogMode(null);
                      setEditingUser(null);
                      form.reset();
                    }}
                  >
                    取消
                  </Button>
                  <Button
                    type="submit"
                    disabled={createMutation.isPending || updateMutation.isPending}
                  >
                    {createMutation.isPending || updateMutation.isPending
                      ? '提交中...'
                      : '提交'}
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
}
