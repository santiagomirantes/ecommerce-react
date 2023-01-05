import { createContext, Context, useState} from "react"

export const cartContext = createContext();

export const CartContextProvider = ({children}) => {

    const data = {
        "count": 0,
        "added":[],
        get changeCount() {
          return (type) => {
            if (type === "sum") {
              data.count++
            }
            else if (type === "sub") {
              data.count = this.count - 1
            }
            else {
              console.log("Invalid argument for changeCount()")
            }
          }
        }
      }

      
        return(
            <cartContext.Provider value={data}>
                {children}
            </cartContext.Provider>
        )
}