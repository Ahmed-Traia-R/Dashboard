import "./sidebar.css";
import {
  LineStyle,
  Timeline,
  TrendingUp,
  PermIdentity,
  Storefront,
  AttachMoney,
  BarChart,
  MailOutline,
  DynamicFeed,
  ChatBubbleOutline,
  WorkOutline,
  Report,
} from "@material-ui/icons";



export default function Sidebar({openProduct,homeDashboard,userDashboard,openTranscation}) {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <ul className="sidebarList">
           
            <li className="sidebarListItem active" onClick={homeDashboard}>
              <LineStyle className="sidebarIcon" />
              Home
            </li>
           
           
           
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Quick Menu</h3>
          <ul className="sidebarList">
            
              <li className="sidebarListItem" onClick={userDashboard}>
                <PermIdentity className="sidebarIcon" />
                Users
              </li>
        
            
              <li  className="sidebarListItem" onClick={openProduct}>
                <Storefront className="sidebarIcon" />
                Products
              </li>
          
            <li className="sidebarListItem"onChange={openTranscation}>
              <AttachMoney className="sidebarIcon" />
              Transactions
            </li>
            
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Notifications</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <MailOutline className="sidebarIcon" />
              Mail
            </li>
            <li className="sidebarListItem">
              <DynamicFeed className="sidebarIcon" />
              Feedback
            </li>
            <li className="sidebarListItem">
              <ChatBubbleOutline className="sidebarIcon" />
              Messages
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          
          <ul className="sidebarList">
          
          </ul>
        </div>
      </div>
    </div>
  );
}