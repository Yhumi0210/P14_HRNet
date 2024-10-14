import PropTypes from "prop-types"

/**
 * EmployeeTable component renders a table of employees.
 * @param index
 * @param employee
 * @returns {JSX.Element}
 * @constructor
 * @property {number} index
 * @property {object} employee
 *
 */
export default function EmployeeTable({paginatedEmployees, handleSort, columnNamesAndKeys }) {

    return (
        <>
            <table>
                <thead className='bg-emerald-400 border-2 border-emerald-400 h-12'>
                <tr className=''>
                    {/* label = First Name (index 0), key = firstName (index 1). Si pas destructuré: props[0], props[1]*/}
                    {columnNamesAndKeys.map(([columnName, key], index) => (
                        <th className='cursor-pointer' key={index} onClick={() => handleSort(key)}>
                            {columnName}<div>▲▼</div>
                        </th>
                    ))}
                </tr>
                </thead>
                <tbody>
                {/* Vérifie s'il y a des datas, sinon affiche le message "No data available" */}
                {/* */}
                {paginatedEmployees.length > 0 ? (
                    paginatedEmployees.map((employee, index) => (
                        <tr key={index} className='h-10'>
                            {columnNamesAndKeys.map((columnNameAndKey, index) => (
                                <td className='border-2 border-emerald-400' key={index}>{employee[columnNameAndKey[1]]}</td>
                            ))}
                        </tr>
                    ))) : (
                    <tr>
                        <td colSpan="9" className="text-center py-4">
                            No data available in table
                        </td>
                    </tr>
                )}
                </tbody>
            </table>
        </>
    )
}

EmployeeTable.propTypes = {
    paginatedEmployees: PropTypes.array.isRequired,
    handleSort: PropTypes.func.isRequired,
    columnNamesAndKeys: PropTypes.array.isRequired
}