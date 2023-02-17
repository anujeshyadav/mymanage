// ** React Imports
import { Fragment, useState } from 'react';

// ** Custom Components
import { AiOutlinePlus } from 'react-icons/ai';

// ** User List Component
import DataTable from 'react-data-table-component';
import { MoreVertical, Edit, Eye } from 'react-feather';

// ** Reactstrap Imports
import {
  Button,
  Modal,
  ModalHeader,
  Row,
  Col,
  ModalBody,
  ModalFooter,
  FormGroup,
  Label,
  Input,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Form
} from 'reactstrap';
// ** Styles
// import '@styles/react/apps/app-users.scss'
import '@styles/react/apps/app-kanban.scss';
import Card from './Card';
import Modaldata from './Modaldata';

const Layout = () => {
  const projectsArr = [
    {
      progress: 'Type ',
      programme: 'Form 1',
      progressColor: 'info',
      totalTasks: '1',
      subtitle: 'React Project',
      title: 'BGC eCommerce App',
    },
    {
      progress: 'Type ',
      programme: 'Form 2',
      totalTasks: '1',
      progressColor: 'danger',
      subtitle: 'UI/UX Project',
      title: 'Falcon Logo Design',
    },
    {
      progress: 'Type ',
      programme: 'Form 3',
      totalTasks: '1',
      progressColor: 'success',
      subtitle: 'Vuejs Project',
      title: 'Dashboard Design',
    },
    {
      progress: 'Type ',
      programme: 'Form 4',
      totalTasks: '1',
      progressColor: 'warning',
      subtitle: 'iPhone Project',
      title: 'Foodista mobile app',
    }
  ];

  const columns = [
    {
      name: 'Profile',
      selector: (row) => row.programme
    },
    {
      name: 'Program',
      selector: (row) => row.progress,
      sortable: true,

      selector: (row) => row.progress
    },
    {
      name: 'Rank Name',
      selector: (row) => row.totalTasks
    },

    {
      name: 'Day to Ready',
      selector: (row) => row.totalTasks
    },
    {
      name: 'Lession to ready',
      selector: (row) => row.totalTasks
    },
    {
      name: 'Manage',
      cell: (row) => (
        <div className="column-action">
          <UncontrolledDropdown>
            <DropdownToggle tag="div" className="btn btn-sm">
              <MoreVertical size={14} className="cursor-pointer" />
            </DropdownToggle>
            <DropdownMenu>
              <DropdownItem tag="span" className="w-100">
                <Edit size={14} className="me-50" />
                <span className="align-middle">Edit</span>
              </DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
        </div>
      )
    }
  ];
  const carddata = [
    // {
    //   title: 'Programme 1',
    //   date: '01/01/23',
    //   time: '03:09',
    //   totalrank: '12',
    //   type: 'By Stripe',
    //   rank: '21'
    // },
    // {
    //   title: 'Programme 2',
    //   date: '01/01/23',
    //   time: '03:09',
    //   totalrank: '12',
    //   type: 'By Stripe',
    //   rank: '21'
    // },
    // {
    //   title: 'Programme 3',
    //   date: '01/01/23',
    //   time: '03:09',
    //   totalrank: '12',
    //   type: 'By Stripe',
    //   rank: '21'
    // }
  ];
  const rankorders = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24
  ];

  const [activecard, setActivecard] = useState('');
  const [tabledata, setTabledata] = useState([]);
  const [itemmodal, setItemmodal] = useState(false);
  const toggleitemmodal = () => setItemmodal(!itemmodal);
  const [rankmodal, setRankmodal] = useState(false);
  const togglerankmodal = () => setRankmodal(!rankmodal);
  return (
    <div className="m-1">
      <div className="">
        <Modal centered={true} isOpen={itemmodal} toggle={toggleitemmodal} size="md">
          <ModalHeader toggle={toggleitemmodal}>Add Template</ModalHeader>
          <ModalBody>
            <Form>
              <FormGroup>
                <Label for="rankName">Template Name</Label>
                <Input type="text" name="name" id="rankName" placeholder="" />
              </FormGroup>
            </Form>
          </ModalBody>
          <ModalFooter>
            <Button color="btn btn-outline-danger" onClick={toggleitemmodal}>
              Cancel
            </Button>{' '}
            <Button color="btn btn-primary" onClick={toggleitemmodal}>
              Save
            </Button>
          </ModalFooter>
        </Modal>

        <Modal centered={true} isOpen={rankmodal} toggle={togglerankmodal} size="sm">
          <ModalHeader toggle={togglerankmodal}>Add Template</ModalHeader>
          <ModalBody>
            <Form>
              <FormGroup>
                <Label for="categoryName">Template Name</Label>
                <Input type="text" name="name" id="categoryName" placeholder="" />
              </FormGroup>
              <FormGroup>
                <Label for="rankorder">Template Order</Label>
                <Input type="select" name="rank" id="rankOrder">
                  {rankorders.map((item) => (
                    <option value={item}>{item}</option>
                  ))}
                </Input>
              </FormGroup>
              <FormGroup>
                <Label for="addCategory">Add Template</Label>
                <Input type="select" name="category" id="addCategory">
                  <option>Category A</option>
                  <option>Category B</option>
                  <option>Category C</option>
                </Input>
              </FormGroup>
              <FormGroup>
                <Label>Color</Label>
                <Input type="color"></Input>
              </FormGroup>

              <FormGroup>
                <Label for="exampleFile">Upload Image</Label>
                <Input id="exampleFile" name="file" type="file" />
              </FormGroup>
            </Form>
          </ModalBody>
          <ModalFooter>
            <Button color="btn btn-outline-danger" onClick={togglerankmodal}>
              Cancel
            </Button>{' '}
            <Button color="btn btn-primary" onClick={togglerankmodal}>
              Save
            </Button>
          </ModalFooter>
        </Modal>
      </div>
      <Fragment>
        <div className="app-user-list">
          <Row>
            {carddata?.map((item, i) => (
              <>
                <Col lg="4" sm="6">
                  <div
                    className={`card border ${
                      activecard === item?.title ? 'border border-primary' : ''
                    }`}
                    onClick={() => {
                      setActivecard(item?.title);

                      item?.title === 'Teakwondo' ? setTabledata([]) : setTabledata([]);
                    }}
                  >
                    <Card
                      togglemodal={toggleitemmodal}
                      title={item?.title}
                      subtitle1={item?.date}
                      subtitle2={item?.time}
                      des1={item?.rank}
                      des2={item?.type}
                    />
                  </div>
                </Col>
              </>
            ))}
            <Col lg="4">
              <div className="card p-3">
                <Button onClick={togglerankmodal} width="2" color="primary">
                  Add Template
                </Button>
              </div>
            </Col>
          </Row>
        </div>
      </Fragment>
    </div>
  );
};

export default Layout;
