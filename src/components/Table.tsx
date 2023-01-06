import React, { useMemo } from 'react';
import { useTable, useSortBy, usePagination } from 'react-table';
import { COLUMNS } from './Columns';

const changeName = (user:any) => {
    user.firstName = "harman";
}


const Table = (props: any) => {
    
    const users = props.users;
    const columns = useMemo(() => COLUMNS, []);
    const data = useMemo(() => users, [users])
    changeName(users[0]);
    const { getTableProps,
        getTableBodyProps,
        headerGroups,
        page,
        nextPage,
        previousPage,
        canPreviousPage,
        canNextPage,
        prepareRow,
        pageOptions,
        gotoPage,
        pageCount,
        state } = useTable({
            columns,
            data,
        }, useSortBy, usePagination)
    const { pageIndex } = state;

    return (
        <>
            <div className="ml-2 flex flex-col border-shadow-0.5">
                <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                        <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
                            <h3 className='ml-4 mt-4 text-xl font-bold leading-none tracking-tight text-gray-900 md:text-2xl lg:text-3xl'>Users</h3>
                            <p className='ml-4 mt-2 text-lg font-sans font-medium text-gray-500 lg:text-xl dark:text-gray-400'>Manage your team members and their account permissions</p>
                            <table className=" min-w-full" {...getTableProps()}>
                                <thead className="bg-white border-b">
                                    {
                                        headerGroups.map(headerGroup => (
                                            <tr {...headerGroup.getHeaderGroupProps()}>
                                                {
                                                    headerGroup.headers.map((column) => (
                                                        <th className="text-lg font-medium text-gray-900 px-6 py-4 text-left" {...column.getHeaderProps(column.getSortByToggleProps())}>{column.render('Header')}
                                                            <span>{column.isSorted ? (column.isSortedDesc ? ' ▼' : ' ▲') : ''}</span></th>

                                                    ))
                                                }
                                            </tr>
                                        ))
                                    }

                                </thead>
                                <tbody {...getTableBodyProps()}>
                                    {
                                        page.map(row => {
                                            prepareRow(row);
                                            return (
                                                <tr className="odd:bg-white even:bg-slate-100" {...row.getRowProps()}>{
                                                    row.cells.map((cell) => {
                                                        return <td className="  px-6 py-4 whitespace-nowrap text-lg font-medium text-gray-900" {...cell.getCellProps()}>{cell.render('Cell')}</td>
                                                    })
                                                }
                                                </tr>
                                            )
                                        })
                                    }
                                </tbody>
                            </table>
                            <div className='min-w-full'>
                                <a onClick={() => previousPage()} className=" m-4 inline-flex cursor-pointer items-center px-4 py-2 mr-3 text-sm font-medium text-black-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-800 hover:text-white ">
                                    <svg aria-hidden="true" className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z" clip-rule="evenodd"></path></svg>
                                    Previous
                                </a>
                                <a onClick={() => nextPage()} className=" m-4 inline-flex cursor-pointer items-right px-4 py-2 mr-3 text-sm font-medium text-black-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-800 hover:text-white ">
                                    Next
                                    <svg aria-hidden="true" className="w-5 h-5 ml-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Table