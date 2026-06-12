import "./SidebarListItem.css"

const SidebarListItem = ({type}) => {
    return (
        <li className="sidebar-list-item">
            <a href="#">
                <i className={`bi bi-${type} sidebar-icon`}></i>
            </a>
        </li>
    )
}

export default SidebarListItem