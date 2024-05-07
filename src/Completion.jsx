import './Completion.css'

function Completion() {
  return (
    <>
        <div className='completion-content-container'>
            <table>
                <tr>
                    <td>
                        Major
                    </td>
                    <td>
                        <div className='progress-bar' id='bar-major'></div>
                    </td>
                    <td>
                        4 / 21
                    </td>
                </tr>
                <tr>
                    <td>
                        Major Core
                    </td>
                    <td>
                        <div className='progress-bar' id='bar-major-core'></div>
                    </td>
                    <td>
                        15 / 21
                    </td>
                </tr>
                <tr>
                    <td>
                        Experiment
                    </td>
                    <td>
                        <div className='progress-bar' id='bar-experiment'></div>
                    </td>
                    <td>
                        2 / 2
                    </td>
                </tr>
                <tr>
                    <td>
                        Humanity
                    </td>
                    <td>
                        <div className='progress-bar' id='bar-humanity'></div>
                    </td>
                    <td>
                        22 / 29
                    </td>
                </tr>
                <tr>
                    <td>
                        Liberal Arts
                    </td>
                    <td>
                        <div className='progress-bar' id='bar-liberal-arts'></div>
                    </td>
                    <td>
                        18 / 18
                    </td>
                </tr>
                <tr>
                    <td>
                        BSM
                    </td>
                    <td>
                        <div className='progress-bar' id='bar-bsm'></div>
                    </td>
                    <td>
                        6 / 6
                    </td>
                </tr>

            </table>
        </div>
    </>
  )
}

export default Completion;