// React component
import { React, useState, Fragment } from 'react';
import { Button, Card, CardBody, Row, Col, Container, ListGroup, ListGroupItem, NavLink, TabContent, TabPane, } from 'reactstrap';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import classnames from 'classnames';
import { TrendingUp } from 'react-feather';



// custom import
import { getUserData } from '../../../utility/Utils'
import Layout from './layout';


// icon import
import { TbPlus } from 'react-icons/tb';

// store import
import { createForm } from '../store';
import EditModal from '../edit/EditModal';

const SelectFunnel = (props) => {
  const dispatch = useDispatch();
  const store = useSelector((state) => state.formBuilder);
  const history = useHistory();
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [active, setActive] = useState('6');
  const [openEditor,setOpenEditor] = useState(false)

  const { stepper, name, memberType, automateEntry, smartList, subCategory, formType } = props;

  const [form,setForm] = useState({
    name:name,
    memberType:memberType,
    automateEntry:automateEntry,
    smartList:smartList,
    subCategory:subCategory,
    type:formType
  })
  const toggleEditor = () =>{
    setOpenEditor(!openEditor)
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = dispatch(
      createForm({
        userId: getUserData().id,
        name,
        memberType,
        automateEntry,
        smartList,
        subCategory,
        formType
      }));
      
      if(store.currentForm) {
        toast.success("Form created successfully");
        //history.push(`/formBuilder/createDetail/${store.currentForm.data._id}`)
        setForm({...data.data})
        
      }
      else {
          toast.error("Form creation failed")
      }
      toggleEditor()
  }

  return(
    <div className="overflow-hidden email-application">
      <div className="content-overlay"></div>
      <div className="content-area-wrapper container-xxl p-0 animate__animated animate__fadeIn">
        <Fragment>
          <Container>
            <div
              className={classnames('sidebar-left', {
                show: sidebarOpen
              })}
            >
              <div className="sidebar">
                <div className="sidebar-content email-app-sidebar">
                  <div className="email-app-menu">
                    <PerfectScrollbar className="sidebar-menu-list" options={{ wheelPropagation: false }}>
                      <div className="form-group-compose text-center compose-btn">
                        <Button color="primary" >
                          Templates
                        </Button>
                      </div>
                      <ListGroup tag="div" className="list-group-labels">
                        <ListGroupItem
                          tag={NavLink}
                        >
                          <TrendingUp size={18} className="me-75" />
                          <span className="align-middle"></span>
                          Template 1
                        </ListGroupItem>
                        {/* <ListGroupItem
                          tag={NavLink}
                          onClick={() => toggleTab('7')}
                          active={active === '7'}
                        >
                          <TrendingUp size={18} className="me-75" />
                          <span className="align-middle"></span>
                          Progression 2
                        </ListGroupItem> */}
                      </ListGroup>
                    </PerfectScrollbar>
                  </div>
                </div>
              </div>
            </div>
            <Row >
              <div className="card p-2">
              <h3>Select Template</h3>
            </div>
            <PerfectScrollbar>
              <TabContent activeTab={active}>
                <TabPane tabId="6">
                  <Layout />
                </TabPane>
                {/* <TabPane tabId="7">
                  <Emptypage />
                </TabPane> */}
              </TabContent>
            </PerfectScrollbar>
            </Row>
              <Col className='d-flex flex-row-reverse'>
                <Button 
                color="primary"
                onClick={handleSubmit}
                >
                  NEXT
                </Button>
                <Button 
                className='px-1 me-1'
                onClick={() => stepper.previous()}
                >
                  BACK
                </Button>
              </Col>
          </Container>
        </Fragment>
      </div>
      <EditModal toggle={toggleEditor} open={openEditor} form={form}/>
    </div>
  )
}

export default SelectFunnel;
