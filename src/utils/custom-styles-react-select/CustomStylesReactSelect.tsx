export const customStylesReactSelect = {
    control: (provided:any, state:any) => ({
        ...provided,
        boxShadow: "none",
        border: state.isFocused && "1px solid var(--primary-color)",
        color: "black !important",
    }),
    menu: (provided:any) => ({
        ...provided,
        position: "relative",
        bottom: "0.7rem",
        right: "0.1rem",
        border: "1px solid var(--primary-color) !important",
        boxShadow: "none",
        borderRadius: '0.5rem',
        width: 200,
        color: 'black',
    }),
    singleValue: (provided:any) => ({
        ...provided,
        color: 'black',
    }),
    menuList: (provided:any) => ({
        ...provided,
        paddingTop: 0,
        paddingBottom: 0,
        height: 153,
        "::-webkit-scrollbar": {
            width: "9px",
            borderRadius: "0.5rem",
            overflow: "hidden",
            cursor: "pointer",
        },
        "::-webkit-scrollbar-track": {
            background: "white",
            borderRadius: "0.5rem"
        },
        "::-webkit-scrollbar-thumb": {
            background: "var(--primary-color)",
        },
    }),
    option: (provided:any, state:any) => ({
        ...provided,
        backgroundColor: state.isFocused && "var(--primary-color)",
        color: state.isFocused && "white",
        padding: 8.6,
        cursor: "pointer",
    }),
    placeholder: (defaultStyles:object) => ({
        ...defaultStyles,
        color: "black",
    }),
    dropdownIndicator: (base:any, state:any) => ({
        ...base,
        color: "black",
        cursor: "pointer",
        "&:hover": {
            color: "black",
        }
    })
}