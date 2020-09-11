import React ,{useState,useCallback}from 'react';
import {FormGroup,Label,Input,Button,Container,ModalHeader} from "reactstrap";
import { useSelector,useDispatch } from "react-redux";
import { bookEvent } from "../store/actions/book";


export default function ModalBooking(props) {
    const {setModalBookOpen} = props
    const eventTitle = useSelector(state => state.events.detail.title);
    const eventId = useSelector(state => state.events.detail.id);
    const [email,setEmail] = useState("")
    const dispatch = useDispatch();
    const closeButton = useCallback(
        () => {
          setModalBookOpen(false)
        },[setModalBookOpen],
      )
    const bookNow = async (e)=>{
        e.preventDefault();
        if(email===""){
          alert("You must fill in the email field")
        }else{
          const create = {
            email,
            eventId,
          }
          console.log(create)
          dispatch(bookEvent(create))
        }
    }
    
    return (
        <div className="booking-wrapper">
            <div className="booking-outer">
            <div className="modalText" style={{minHeight:"7rem"}}>
              <Container style={{ padding: "0 1rem"}}>
                <ModalHeader>
                  Book Event : {eventTitle}
                </ModalHeader>
                <p>To book this event please fill in your email:</p>
                <FormGroup>
                    <Label for="email">Email</Label>
                    <Input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="youremail@email.com"
                    onChange={(e) => setEmail(e.target.value)}
                    />
              </FormGroup>
                <div className="modal-btn">
                  <Button color="danger" style={{minWidth:"8rem"}}onClick={bookNow}>
                    Book Now</Button>
                  <Button color="link" onClick={closeButton}>Cancel</Button>
                </div>
              </Container>
          </div>

            </div>
        </div>
    )
}
