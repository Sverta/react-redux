import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Container, Button, Table, Tabs, Tab } from 'react-bootstrap';

import styles from './DataFromServerStyles.module.css';
import useFetchData from './useFetchDatal';
import ItemTable from './ItemTable';

const DataFromServer = ({ onClick }) => {
    
    const [key, setKey] = useState('home');
    const [pushed, setPushed] = useState(false);
    // const [ownData, setOwnData] = useState([]);

    const res = useFetchData(`http://jsonplaceholder.typicode.com/todos?limit=10`, {});

    if (!res) {
        return <div>Loading...</div>;
    }

    // const pushSelected = () => {
    //     setPushed(true);
    // }
 
    // const multipleCheckItems = (item) => {
    //     setOwnData(ownData.concat(item));
    // }
    
    return (
        <div>
            <Container>
                <Tabs id="controlled-tab-example" activeKey={key} onSelect={k => setKey(k)}>
                    <Tab eventKey="home" title="Home">
                        <div className={styles.containerBox}>
                            <ItemTable res={res}  />
                        </div>
                        <div className={styles.pushBtn}>
                            <Button variant='secondary' onClick={onClick}>Push</Button>
                        </div>
                    </Tab>
                    {pushed &&
                        <Tab eventKey="profile" title="Profile">
                            {/* <ItemTable res={ownData}/> */}
                        </Tab>
                    }
                </Tabs>
            </Container>
        </div>
    );
}
// DataFromServer.propTypes = {
//     onClick: PropTypes.func.isRequired
// }

export default DataFromServer;
