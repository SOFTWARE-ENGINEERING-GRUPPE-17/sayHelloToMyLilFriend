import React, {useState} from 'react';
import {Card, Button} from 'react-bootstrap';
import DatePicker from 'react-date-picker';
import '../App.css';


function Park() {

    const styles = {
        alignItems: "center",
        borderRadius: 25,
        paddingLeft: "50%",
        backgroundColor: "#ededed",
        padding: 20,
        width: '25rem',
        margin: 10,

    }

    const styles2 = {
        alignItems: "center",
        borderRadius: 25,
        paddingLeft: "50%",
        padding: 20,
        width: '25rem',
        backgroundColor: "#496fc6",
        margin: 10

    }



    const [count, setCount] = useState("Lei denne parkeringen");
    const [count2, setCount2] = useState("Lei denne parkeringen");
    const [count3, setCount3] = useState("Lei denne parkeringen");
    const [count4, setCount4] = useState("Lei denne parkeringen");
    const [count5, setCount5] = useState("Lei denne parkeringen");
    const [count6, setCount6] = useState("Lei denne parkeringen");

    return (
        <div style={{
            backgroundColor: "lightGrey",
            display: 'flex',
            height: '100vh',
            alignItems: "center",
            flexDirection: 'column',

        }}>

            <Card style={styles}>
                <Card.Img width={400} height={250} variant="top"
                          src="https://cdn.homedit.com/wp-content/uploads/2017/04/Tree-House-open-space-Garage-for-two-cars-1024x682.jpg"/>
                <Card.Body  style={{backgroundColor: "#ededed", borderRadius: 25, padding: 10}}>
                    <p  className={"p"}>Fra:</p>
                    <DatePicker
                        yearPlaceholder={"2020"}
                        monthPlaceholder={"01"}
                        dayPlaceholder={"01"}
                    />
                    <p>Til</p>
                    <DatePicker
                        yearPlaceholder={"2020"}
                        monthPlaceholder={"01"}
                        dayPlaceholder={"01"}
                    />
                    <Card.Title>Langkaia 1
                        0150 Oslo</Card.Title>

                    <Card.Text>
                        2 parkeringer
                    </Card.Text>

                    <Button className={"b1"} onClick={() => setCount("Leid")}>{count}</Button>
                </Card.Body>
            </Card>

            <Card style={styles2}>
                <Card.Img width={400} height={250} variant="top"
                          src="https://i.pinimg.com/originals/9d/bf/54/9dbf54c3e738cd5ee5a5cab5209d1e9d.jpg"/>
                <Card.Body style={{backgroundColor: "#ededed", borderRadius: 25, padding: 10}}>
                    <p>Fra:</p>
                    <DatePicker
                        yearPlaceholder={"2020"}
                        monthPlaceholder={"01"}
                        dayPlaceholder={"01"}
                    />
                    <p>Til</p>
                    <DatePicker
                        yearPlaceholder={"2020"}
                        monthPlaceholder={"01"}
                        dayPlaceholder={"01"}
                    />
                    <Card.Title>Biskop Gunnerus' gate 14A
                        0185 Oslo</Card.Title>
                    <Card.Text>
                        1 parkering
                    </Card.Text>
                    <Button onClick={() => setCount2("Leid")}>{count2} </Button>
                </Card.Body>
            </Card>

            <Card style={styles}>
                <Card.Img width={400} height={250} variant="top"
                          src="https://mygate.com/blog/wp-content/uploads/2020/03/parking_blogbanner-22.jpg"/>
                <Card.Body>
                    <p>Fra:</p>
                    <DatePicker
                        yearPlaceholder={"2020"}
                        monthPlaceholder={"01"}
                        dayPlaceholder={"01"}
                    />
                    <p>Til</p>
                    <DatePicker
                        yearPlaceholder={"2020"}
                        monthPlaceholder={"01"}
                        dayPlaceholder={"01"}
                    />
                    <Card.Title>Haakon VIIs gate 9
                        0161 Oslo</Card.Title>
                    <Card.Text>
                        5 parkeringer
                    </Card.Text>
                    <Button onClick={() => setCount3("Leid")}>{count3} </Button>
                </Card.Body>
            </Card>

            <Card style={styles2}>
                <Card.Img width={400} height={250} variant="top"
                          src="https://www.autoguide.com/auto-news/wp-content/uploads//2012/01/parkatmyhouse.jpg"/>
                <Card.Body style={{backgroundColor: "#ededed", borderRadius: 25, padding: 10}}>
                    <p>Fra:</p>
                    <DatePicker
                        yearPlaceholder={"2020"}
                        monthPlaceholder={"01"}
                        dayPlaceholder={"01"}
                    />
                    <p>Til</p>
                    <DatePicker
                        yearPlaceholder={"2020"}
                        monthPlaceholder={"01"}
                        dayPlaceholder={"01"}
                    />
                    <Card.Title>Smalvollveien 44
                        0667 Oslo</Card.Title>
                    <Card.Text>
                        2 parkeringer
                    </Card.Text>
                    <Button onClick={() => setCount4("Leid")}>{count4} </Button>
                </Card.Body>
            </Card>

            <Card style={styles}>
                <Card.Img width={400} height={250} variant="top"
                          src="https://www.toronto.ca/wp-content/uploads/2017/11/9929-applying-for-a-permit.jpg"/>
                <Card.Body>
                    <p>Fra:</p>
                    <DatePicker
                        yearPlaceholder={"2020"}
                        monthPlaceholder={"01"}
                        dayPlaceholder={"01"}
                    />
                    <p>Til</p>
                    <DatePicker
                        yearPlaceholder={"2020"}
                        monthPlaceholder={"01"}
                        dayPlaceholder={"01"}
                    />
                    <Card.Title>Ole Deviks vei 24
                        0666 Oslo</Card.Title>
                    <Card.Text>
                        4 parkeringer
                    </Card.Text>
                    <Button onClick={() => setCount5("Leid")}>{count5} </Button>
                </Card.Body>
            </Card>
            <br/>
            <Card style={styles2}>
                <Card.Img width={400} height={250} variant="top"
                          src="https://live.staticflickr.com/4124/5103266193_afd3ba7258_n.jpg"/>
                <Card.Body style={{backgroundColor: "#ededed", borderRadius: 25, padding: 10}}>
                    <p>Fra:</p>
                    <DatePicker
                        yearPlaceholder={"2020"}
                        monthPlaceholder={"01"}
                        dayPlaceholder={"01"}
                    />
                    <p>Til</p>
                    <DatePicker
                        yearPlaceholder={"2020"}
                        monthPlaceholder={"01"}
                        dayPlaceholder={"01"}
                    />
                    <Card.Title>Brobekkveien 80
                        0582 Oslo</Card.Title>
                    <Card.Text>
                        2 parkeringer
                    </Card.Text>
                    <Button onClick={() => setCount6("Leid")}>{count6} </Button>
                </Card.Body>
            </Card>
        </div>
    );
}

export default Park;
