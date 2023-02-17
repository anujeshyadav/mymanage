import { Fragment, useEffect, useState } from 'react';
import img5 from '@src/assets/images/portrait/small/avatar-s-4.jpg';
import {
  Col,
  NavLink,
  Card,
  Nav,
  Row,
  TabContent,
  TabPane,
  FormGroup,
  Label,
  Input
} from 'reactstrap';
import BudetTool from './BudgetTool';
import LaborTool from './LaborTool';
import { Sun, User, ChevronDown, ChevronUp } from 'react-feather';
import moment from 'moment';
import AddEmpolye from './AddEmpolye';

// const weather = [Sun]
const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const data = [
  {
    id: 1,
    name: 'Antanio S',
    tracker: 0,
    startTime: '00:00',
    endTime: '00:00'
  },
  {
    id: 2,
    name: 'Antanio S',
    tracker: 0,
    startTime: '00:00',
    endTime: '00:00'
  },
  {
    id: 3,
    name: 'Antanio S',
    tracker: 0,
    startTime: '00:00',
    endTime: '00:00'
  },
  {
    id: 4,
    name: 'Antanio S',
    tracker: 0,
    startTime: '00:00',
    endTime: '00:00'
  }
];

const WeekCalender = () => {
  const [selectedPage, setSelectedPage] = useState(1);
  const [postsPerPage] = useState(5);
  const [currentDate, setCurrentDate] = useState(moment());
  const [days, setDays] = useState([]);
  const [active, setActive] = useState('1');
  const handleFormOpen = () => {};
  const [openfooter, setopenfooter] = useState(false);

  const toggle = (tab) => {
    setActive(tab);
    setopenfooter(true);
  };

  const handleClickOpen = () => {
    setopenfooter(!openfooter);
  };

  useEffect(() => {
    const daysInWeek = [];
    for (let i = 0; i < 7; i++) {
      daysInWeek.push(moment().add(i, 'days'));
    }
    setDays(daysInWeek);
  }, [currentDate]);

  const handlePageChange = (event) => {
    setSelectedPage(parseInt(event.target.value));
  };

  const indexOfLastPost = selectedPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const displayData = data.slice(indexOfFirstPost, indexOfLastPost);

  return (
    <Fragment>
      <Card>
        <div className="w-100 rounded p-1">
          <h5>Week Calendar</h5>
          <table className="w-100 ">
            <thead>
              <tr>
                <th className="border cursor-pointer" width={'300'}>
                  <div className="d-flex">
                    <div className="m-1">
                      <AddEmpolye />
                    </div>
                    <div className="d-flex" style={{ marginTop: '20px ', marginLeft: '20px' }}>
                      <Sun size={18} />
                      <span>30 F</span>
                      <br />
                      <span>66</span>
                    </div>
                  </div>
                </th>
                {days.map((day) => (
                  <th
                    className="border cursor-pointer text-center"
                    key={day.format('MMM DD')}
                    style={{ padding: '5px' }}
                  >
                    <span>
                      <b>{day.format('ddd')}</b>
                    </span>
                    <br />
                    <span style={{ fontWeight: '200' }}> {day.format('MMM DD')}</span>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              <tr className="border">
                <th className="border cursor-pointer p-2">Opening Shift Server</th>
                <th className="border cursor-pointer"></th>
                <th className="border cursor-pointer"></th>
                <th className="border cursor-pointer"></th>
                <th className="border cursor-pointer"></th>
                <th className="border cursor-pointer"></th>
                <th className="border cursor-pointer"></th>
              </tr>
              <tr className="border">
                <th className="border cursor-pointer p-2">Opening Shift Manager</th>
                <th className="border cursor-pointer"></th>
                <th className="border cursor-pointer"></th>
                <th className="border cursor-pointer"></th>
                <th className="border cursor-pointer"></th>
                <th className="border cursor-pointer"></th>
                <th className="border cursor-pointer"></th>
              </tr>
              {displayData.map((item, i) => (
                <tr key={i}>
                  <th className="border cursor-pointer" style={{ width: '200px' }}>
                    <div className="d-flex p-1">
                      <img
                        src={img5}
                        className="rounded-circle me-2"
                        alt="Generic placeholder image"
                        height="40"
                        width="40"
                      />
                      <div className="ml-1 ">
                        <h5 className="font-weight-bold">{item.name}</h5>
                        <span style={{ fontSize: '12px' }}>$0.00 - $0.00</span>
                      </div>
                    </div>
                  </th>
                  <th className="border cursor-pointer"></th>
                  <th className="border cursor-pointer"></th>
                  <th className="border cursor-pointer"></th>
                  <th className="border cursor-pointer"></th>
                  <th className="border cursor-pointer"></th>
                  <th className="border cursor-pointer"></th>
                  <th className="border cursor-pointer"></th>
                </tr>
              ))}
              <tr className="border bg-success text-white">
                <th className="cursor-pointer pl-2">Host</th>
                <th className="cursor-pointer"></th>
                <th className="cursor-pointer"></th>
                <th className="cursor-pointer"></th>
                <th className="cursor-pointer"></th>
                <th className="cursor-pointer"></th>
                <th className="cursor-pointer"></th>
                <th className="cursor-pointer"></th>
              </tr>
              {displayData.map((item, i) => (
                <tr key={i}>
                  <th className="border cursor-pointer" style={{ width: '200px' }}>
                    <div className="d-flex p-1">
                      <img
                        src={img5}
                        className="rounded-circle me-2"
                        alt="Generic placeholder image"
                        height="40"
                        width="40"
                      />
                      <div className="ml-1 ">
                        <h5 className="font-weight-bold">{item.name}</h5>
                        <span style={{ fontSize: '12px' }}>$0.00 - $0.00</span>
                      </div>
                    </div>
                  </th>
                  <th className="border cursor-pointer"></th>
                  <th className="border cursor-pointer"></th>
                  <th className="border cursor-pointer"></th>
                  <th className="border cursor-pointer"></th>
                  <th className="border cursor-pointer"></th>
                  <th className="border cursor-pointer"></th>
                  <th className="border cursor-pointer"></th>
                </tr>
              ))}
            </tbody>
          </table>
          <FormGroup
            style={{
              width: '100px',
              marginTop: '10px',
              display: 'flex',
              justifyContent: 'flex-end'
            }}
          >
            <Label for="pageSelect" style={{ marginTop: '8px' }}>
              Page:
            </Label>
            <Input
              type="select"
              name="pageSelect"
              id="pageSelect"
              value={selectedPage}
              onChange={handlePageChange}
              style={{ width: '100px' }}
            >
              {Array.from({ length: Math.ceil(data.length / postsPerPage) }, (_, i) => (
                <option key={i + 1} value={i + 1}>
                  {i + 1}
                </option>
              ))}
            </Input>
          </FormGroup>
        </div>
      </Card>
      <div>
        <div className="d-flex justify-content-between h-100">
          <div className="shadow bg-white cursor-pointer">
            <Nav tabs className="p-0">
              <NavLink
                active={active === '1'}
                className="rounded"
                onClick={() => {
                  toggle('1');
                }}
              >
                Budget Tool
              </NavLink>
              <NavLink
                active={active === '2'}
                className="rounded"
                onClick={() => {
                  toggle('2');
                }}
              >
                Optimal Labor
              </NavLink>
            </Nav>
          </div>
          <div onClick={handleClickOpen} className="shadow bg-white cursor-pointer p-1">
            {openfooter ? <ChevronDown /> : <ChevronUp />}
          </div>
        </div>
        <div className="w-100 shadow bg-white h-100">
          <TabContent activeTab={active}>
            <TabPane tabId="1">
              <div className="w-100 shadow bg-white rounded">
                <BudetTool openfooter={openfooter} />
              </div>
            </TabPane>
            <TabPane tabId="2">
              <div className="w-100 shadow bg-white rounded">
                <LaborTool openfooter={openfooter} />
              </div>
            </TabPane>
          </TabContent>
        </div>
      </div>
    </Fragment>
  );
};

export default WeekCalender;
