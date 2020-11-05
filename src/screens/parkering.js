import React from 'react';
import {Card, Button} from 'react-bootstrap';
import '../App.css';



function Park() {
    const listStyle = {
        listStyleType: "none",
    }
    const boxStyle = {
        marginTop: 16,
        paddingVertical: 8,
        borderWidth: 10,
        borderRadius: 6,
        color: "black",
        fontSize: 20,
        fontWeight: "bold",
        padding: 10,
        backgroundColor: "#61dafb",
        width: "6%"
    }
    return (
        <div style={{backgroundColor: "lightGrey"}}>
            <Card style={{paddingLeft: "50%", backgroundColor: "#cdf7f7", padding: 10, width: '25rem'}}>
                <Card.Img width={400} height={250} variant="top"
                          src="https://cdn.homedit.com/wp-content/uploads/2017/04/Tree-House-open-space-Garage-for-two-cars-1024x682.jpg"/>
                <Card.Body>
                    <Card.Title>Langkaia 1
                        0150 Oslo</Card.Title>
                    <Card.Text>
                        2 parkeringer
                    </Card.Text>
                    <Button>Lei denne parkeringen</Button>
                </Card.Body>
            </Card>

            <Card style={{paddingLeft: "50%", padding: 10, width: '25rem'}}>
                <Card.Img width={400} height={250} variant="top"
                          src="https://i.pinimg.com/originals/9d/bf/54/9dbf54c3e738cd5ee5a5cab5209d1e9d.jpg"/>
                <Card.Body>
                    <Card.Title>Biskop Gunnerus' gate 14A
                        0185 Oslo</Card.Title>
                    <Card.Text>
                        1 parkering
                    </Card.Text>
                    <Button>Lei denne parkeringen</Button>
                </Card.Body>
            </Card>

            <Card style={{backgroundColor: "#cdf7f7", padding: 10, width: '25rem'}}>
                <Card.Img width={400} height={250} variant="top"
                          src="https://mygate.com/blog/wp-content/uploads/2020/03/parking_blogbanner-22.jpg"/>
                <Card.Body>
                    <Card.Title>Haakon VIIs gate 9
                        0161 Oslo</Card.Title>
                    <Card.Text>
                        5 parkeringer
                    </Card.Text>
                    <Button>Lei denne parkeringen</Button>
                </Card.Body>
            </Card>

            <Card style={{padding: 10, width: '25rem'}}>
                <Card.Img width={400} height={250} variant="top"
                          src="https://www.autoguide.com/auto-news/wp-content/uploads//2012/01/parkatmyhouse.jpg"/>
                <Card.Body>
                    <Card.Title>Smalvollveien 44
                        0667 Oslo</Card.Title>
                    <Card.Text>
                       2 parkeringer
                    </Card.Text>
                    <Button>Lei denne parkeringen</Button>
                </Card.Body>
            </Card>

            <Card style={{backgroundColor: "#cdf7f7", padding: 10, width: '25rem'}}>
                <Card.Img width={400} height={250} variant="top"
                          src="https://www.toronto.ca/wp-content/uploads/2017/11/9929-applying-for-a-permit.jpg"/>
                <Card.Body>
                    <Card.Title>Ole Deviks vei 24
                        0666 Oslo</Card.Title>
                    <Card.Text>
                        4 parkeringer
                    </Card.Text>
                    <Button>Lei denne parkeringen</Button>
                </Card.Body>
            </Card>
            <br/>
            <Card style={{padding: 10, width: '25rem'}}>
                <Card.Img width={400} height={250} variant="top"
                          src="https://live.staticflickr.com/4124/5103266193_afd3ba7258_n.jpg"/>
                <Card.Body>
                    <Card.Title>Brobekkveien 80
                        0582 Oslo</Card.Title>
                    <Card.Text>
                        2 parkeringer
                    </Card.Text>
                    <Button>Lei denne parkeringen</Button>
                </Card.Body>
            </Card>
        </div>
    );
}

export default Park;
