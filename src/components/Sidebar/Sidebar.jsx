import SidebarListItem from "./SidebarComponents/SidebarListItem";
import "./Sidebar.css"

const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="sidebar-wrapper" id="sidebar">
                <ul className="sidebar-list">
                    <SidebarListItem type={"search"}/>
                    <SidebarListItem type={"house"}/>
                    <SidebarListItem type={"bookmarks"}/>
                    <SidebarListItem type={"gear"}/>
                </ul>
            </div>
        </div>
    );
}

export default Sidebar;