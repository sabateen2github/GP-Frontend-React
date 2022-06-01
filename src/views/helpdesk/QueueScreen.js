import {Button, CircularProgress, Stack, Typography} from "@mui/material";
import {CommonHeader} from "../common/Headers";
import React from "react";
import {useParams} from "react-router-dom";
import useSWR from "swr";
import {advanceQueue, queueFetcher} from "../../api/branch/queues";
import {CREDENTIAL_KEY, fetchCredentials} from "../../api/login/login";

const HelpDeskQueueScreen = (props) => {

    const {id} = useParams();

    const credentialsRequest = useSWR(CREDENTIAL_KEY, fetchCredentials);

    const {data, error, isValidating, mutate} = useSWR({
        id: id, branchId: credentialsRequest.data.branchId
    }, queueFetcher);

    if (isValidating) {
        return <Stack justifyContent='center' alignItems='center'><CircularProgress/></Stack>;
    } else if (error) return <Typography variant='h2'>Error!</Typography>;

    return (<Stack direction='column' spacing={4} alignItems='center' justifyContent='space-between'>
        <CommonHeader
            branchName={credentialsRequest.data.branchName}
            queueName={data.name}
            logo={credentialsRequest.data.logo}
            institute={credentialsRequest.data.instituteName}
            profilePic={credentialsRequest.data.profilePic}
            employee={credentialsRequest.data.employeeName}
            employeeId={credentialsRequest.data.employeeId}/>
        <Stack direction='row' width='100%' padding={8} alignItems='start' justifyContent='flex-start'>
            <Stack direction='column' alignItems='start' justifyContent='flex-start'>
                <Typography variant='h4'>{`Queue Size: ${data.size}`}</Typography>
                <Typography variant='h4'>{`Physical Queue Size: ${data.physicalSize}`}</Typography>
                <Typography variant='h4'>{`Waiting Remotely: ${data.remoteSize}`}</Typography>
                <Typography variant='h4'>{`Average Service Time: ${data.averageServiceTime}`}</Typography>

            </Stack>
            <Stack direction='column' flex='1' alignItems='center' justifyContent='space-between'>
                <Typography variant='h4'>Current Serving Ticket</Typography>
                <Typography variant='h1'>{`#${data.current}`}</Typography>
                <Stack paddingTop={16} justifyContent='space-between'>
                    <Button variant='contained'
                            onClick={() => advanceQueue(credentialsRequest.data.branchId, id).then((result) => {
                            })}>Next</Button>

                </Stack>
            </Stack>
        </Stack>

    </Stack>);
};

export {HelpDeskQueueScreen};