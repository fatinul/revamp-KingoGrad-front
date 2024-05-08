import React, { useState } from 'react';
import './ThousandLine.css'

function ThousandLine() {
  const [expandedThousandLine, setExpandedThousandLine] = useState(false)

  return (
    <div className='thousandLine'>
        <div className='table-container'>
            <table>
                <tr>
                    <td>
                      <div className='dot-passed'></div>
                    </td>
                    <td>
                      Computer Architecture
                    </td>
                    <td>
                      A
                    </td>
                </tr>
                <tr>
                    <td>
                      <div className='dot-failed'></div>
                    </td>
                    <td>
                      Operationg System
                    </td>
                    <td>
                      C
                    </td>
                </tr>
                <tr>
                    <td>
                      <div className='dot'></div>
                    </td>
                    <td>
                      Database
                    </td>
                    <td>
                      -
                    </td>
                </tr>
                <tr>
                    <td>
                      <div className='dot'></div>
                    </td>
                    <td>
                      Computer Network
                    </td>
                    <td>
                      -
                    </td>
                </tr>
                <tr>
                    <td>
                      <div className='dot'></div>
                    </td>
                    <td>
                      Programming Languages
                    </td>
                    <td>
                      -
                    </td>
                </tr>
            </table>
        </div>
    </div>
  )
}

export default ThousandLine;