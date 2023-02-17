// ** React Imports
import { Fragment, useEffect, useState } from 'react';

// ** Components
import CardEventInfo from './CardEventInfo';
import CardHost from './CardHost';
import PreviewBody from './PreviewBody';

// ** Reactstrap Imports
import { Row, Col, Button } from 'reactstrap';
import { useParams } from 'react-router-dom';
import { getEventInfo } from '../store';
import CardEvent from '../CardEvent';
import SubmitReplyModal from './SubmitReplyModal';
import { useDispatch, useSelector } from 'react-redux';

const NotAuthPreview = () => {
  const dispatch = useDispatch();
  const { eventId, guestId } = useParams();
  let guestInfo = {};
  if (guestId) guestInfo = JSON.parse(atob(guestId));
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);
  const eventInfo = useSelector((state) => state.event.eventInfo);
  useEffect(() => {
    dispatch(getEventInfo(eventId));
  }, []);

  return (
    <Fragment>
      <div className="d-flex  justify-content-around p-4 pb-2">
        <h1 className="font-large-3 fw-bolder text-uppercase">Event View</h1>
      </div>
      <Row className="m-1">
        <Col md="4">
          <CardEvent
            eventInfo={{
              title: eventInfo.title,
              start: eventInfo.start,
              end: eventInfo.end,
              url: eventInfo.eventBanner,
              eventLocation: eventInfo.eventLocation,
              eventStreet: eventInfo.eventStreet,
              eventCity: eventInfo.eventCity,
              eventState: eventInfo.eventState
            }}
          />
          <CardHost
            hostInfo={{
              hostName: eventInfo.hostName,
              hostEmail: eventInfo.hostEmail,
              hostMobileNumber: eventInfo.hostMobileNumber
            }}
          />
          <div>
            <h3 className="lh-base mb-2">Are you interested in this event? Please reply to {eventInfo.hostName}.</h3>
            <Button color="primary" className="w-100" onClick={toggle}>Reply</Button>
          </div>
        </Col>
        <Col md="8">
          <PreviewBody
            eventInfo={{
              url: eventInfo.eventBanner,
              title: eventInfo.title,
              notes: eventInfo.notes
            }}
          />
        </Col>
      </Row>

      <SubmitReplyModal
        modal={modal}
        setModal={setModal}
        toggle={toggle}
        _id={eventId}
        guestInfo={guestInfo}
      ></SubmitReplyModal>

    </Fragment>
  );
};

export default NotAuthPreview;
