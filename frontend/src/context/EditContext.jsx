import { Children, createContext, useContext } from 'react'

const EditContext = createContext({ Children })

export const useEditContext = () => {
    return useContext(EditContext)
}

function EditProvider() {




    const valueContext = {

    }

    return (
        <EditContext.Provider value={valueContext}>
            {Children}
        </EditContext.Provider>
    )
}

export default EditProvider;