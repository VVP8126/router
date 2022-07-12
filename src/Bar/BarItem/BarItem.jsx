const BarItem = (params) => {
    return (<a href={`/${params.path}`} className={params.styles} >{params.label}</a>)
}
export default BarItem;