import {Button, CircularProgress, Stack, Typography} from "@mui/material";
import {CommonHeader} from "../common/Headers";
import React from "react";
import {useParams} from "react-router-dom";
import useSWR from "swr";
import {advanceQueue, queueFetcher, resetQueue} from "../../api/branch/queues";
import {branchFetcher} from "../../api/branch/branches";

const QueueScreen = (props) => {

    const {branchId, queueId} = useParams();

    const branchResponse = useSWR(branchId, branchFetcher);
    const {data, error, isValidating, mutate} = useSWR({id: queueId, branchId: branchId}, queueFetcher);

    if (isValidating) {
        return <CircularProgress/>;
    } else if (error) return <Typography variant='h2'>Error!</Typography>;

    return (<Stack direction='column' spacing={4} alignItems='center' justifyContent='space-between'>
        <CommonHeader
            branchName={branchResponse.data ? branchResponse.data.name : undefined}
            queueName={data ? data.name : undefined}
            logo={localStorage.getItem('logo')}
            institute={localStorage.getItem('instituteName')}
            profilePic={localStorage.getItem('profilePic')}
            employee={localStorage.getItem('employeeName')}
            employeeId={localStorage.getItem('employeeId')}/>
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
                <Stack direction='row' paddingTop={16} width='80%' justifyContent='space-between'>
                    <div><Button onClick={() => resetQueue(branchId, queueId).then((result) => {
                    })} variant='contained'>Reset</Button></div>
                    <div><Button variant='contained' onClick={() => advanceQueue(branchId, queueId).then((result) => {
                    })}>Next</Button></div>
                    <Stack direction='column' spacing={4} justifyContent='space-between'>
                        <Button variant='contained'>Edit Queue</Button>
                        <Button color='error' variant='contained'>Delete Queue</Button>
                    </Stack>
                </Stack>
            </Stack>
        </Stack>

    </Stack>);
};

export {QueueScreen};