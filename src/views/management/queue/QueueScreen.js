import {
    Button,
    CircularProgress,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    Stack,
    TextField,
    Typography
} from "@mui/material";
import {CommonHeader} from "../../common/Headers";
import React, {useRef, useState} from "react";
import {useNavigate, useParams} from "react-router-dom";
import useSWR from "swr";
import {advanceQueue, deleteQueue, editQueue, queueFetcher, resetQueue} from "../../../api/branch/queues";
import {branchFetcher} from "../../../api/branch/branches";
import {CREDENTIAL_KEY, fetchCredentials} from "../../../api/login/login";
import {ApiClient} from "backend-client";


const QueueDialogHolder = ({
                               actionColor = 'primary',
                               actionText = "Add new Queue",
                               showTextField = true,
                               message,
                               defaultText,
                               open,
                               children,
                               onCancel,
                               onSubmit,
                               ...props
                           }) => {
    const ref = useRef();

    return (
        <div>
            {children}
            <Dialog open={open} onClose={onCancel}>
                <DialogTitle>{actionText}</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        {message}
                    </DialogContentText>
                    {showTextField && <TextField
                        defaultValue={defaultText}
                        inputRef={ref}
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Enter queue name"
                        fullWidth
                        variant="standard"
                    />}

                </DialogContent>
                <DialogActions>
                    <Button onClick={onCancel}>Cancel</Button>
                    <Button color={actionColor}
                            onClick={() => onSubmit(ref.current ? ref.current.value : undefined)}>{actionText}</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
};

const QueueScreen = (props) => {

    const history = useNavigate();

    const {branchId, queueId} = useParams();

    const branchResponse = useSWR(branchId, branchFetcher);
    const {data, error, isValidating, mutate} = useSWR({id: queueId, branchId: branchId}, queueFetcher);

    const [openEdiQueue, setOpenEditQueue] = useState(false);
    const [openDeleteQueue, setOpenDeleteQueue] = useState(false);


    const credentialsRequest = useSWR(CREDENTIAL_KEY, fetchCredentials);


    if (isValidating || credentialsRequest.isValidating) {
        return <Stack justifyContent='center' alignItems='center'><CircularProgress/></Stack>;
    } else if (error || credentialsRequest.error) return <Typography variant='h2'>Error!</Typography>;


    return (
        <QueueDialogHolder
            open={openDeleteQueue}
            actionText={"Delete"}
            showTextField={false}
            message={'Do you want to delete the queue?'}
            onCancel={() => {
                setOpenDeleteQueue(false)
            }}
            onSubmit={() => {
                deleteQueue(branchId, queueId).then((result) => {
                    if (result) {
                        setOpenDeleteQueue(false);
                        history(-1);
                    }
                });
            }}
            actionColor={'error'}
        >
            <QueueDialogHolder
                actionText={'Edit Queue name'}
                open={openEdiQueue}
                message={'Please enter the queue name.'}
                onCancel={() => {
                    setOpenEditQueue(false)
                }}
                onSubmit={(name) => {
                    editQueue({branchId: branchId, queueId: queueId, queueName: name}).then((result) => {
                        if (result) {
                            mutate().then(() => {
                                setOpenEditQueue(false);
                            });
                        }
                    });
                }}

            >
                <Stack direction='column' spacing={4} alignItems='center' justifyContent='space-between'>
                    <CommonHeader
                        branchName={branchResponse.data ? branchResponse.data.name : undefined}
                        queueName={data ? data.queueSpec.name : undefined}
                        logo={`${ApiClient.instance.basePath}${credentialsRequest.data.logo}`}
                        institute={credentialsRequest.data.instituteName}
                        profilePic={credentialsRequest.data.profilePic}
                        employee={credentialsRequest.data.employeeName}
                        employeeId={credentialsRequest.data.employeeId}/>
                    <Stack direction='row' width='100%' padding={8} alignItems='start' justifyContent='flex-start'>
                        <Stack direction='column' alignItems='start' justifyContent='flex-start'>
                            <Typography variant='h4'>{`Queue Size: ${data.queueSize}`}</Typography>
                            <Typography variant='h4'>{`Physical Queue Size: ${data.physicalSize}`}</Typography>
                            <Typography variant='h4'>{`Waiting Remotely: ${data.remoteSize}`}</Typography>
                            <Typography variant='h4'>{`Average Service Time: ${data.averageTime}`}</Typography>

                        </Stack>
                        <Stack direction='column' flex='1' alignItems='center' justifyContent='space-between'>
                            <Typography variant='h4'>Current Serving Ticket</Typography>
                            <Typography
                                variant='h1'>{data.currentTurnId ? `#${data.currentTurnId}` : 'None'}</Typography>
                            <Stack direction='row' paddingTop={16} width='80%' justifyContent='space-between'>
                                <div><Button onClick={() => resetQueue(branchId, queueId).then((result) => {
                                })} variant='contained'>Reset</Button></div>
                                <div><Button variant='contained'
                                             onClick={() => advanceQueue(branchId, queueId).then((result) => {
                                             })}>Next</Button></div>
                                <Stack direction='column' spacing={4} justifyContent='space-between'>
                                    <Button variant='contained' onClick={() => setOpenEditQueue(true)}>Edit
                                        Queue</Button>
                                    <Button color='error' variant='contained' onClick={() => setOpenDeleteQueue(true)}>Delete
                                        Queue</Button>
                                </Stack>
                            </Stack>
                        </Stack>
                    </Stack>

                </Stack>
            </QueueDialogHolder>
        </QueueDialogHolder>
    );
};

export {QueueScreen};