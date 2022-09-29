import { createTheme, ThemeOptions } from "@mui/material";
import { Theme } from "@mui/material";
declare module "@mui/material"{
    export interface PaletteOptions{
        otherColor:{
            main:string
        }
    }
    export interface Palette{
        otherColor?:{
            main:string
        }
    }
   
}

const themeOption:ThemeOptions={
    
        palette:{
           otherColor:{
            main:"#1f45"
           },
            primary:{
                main:"#1760a5",
                light:"lightblue"
            },
            secondary:{
                main:"#15c630"
            },
            
    
        },
        
        
        
}






export const theme =createTheme(themeOption)

