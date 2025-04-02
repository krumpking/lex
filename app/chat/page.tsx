"use client";

import { IFile, fetchFiles } from "@/services/file";
import { IRoom, createRoom, fetchRooms } from "@/services/room";
import {
  Button,
  Divider,
  Grid,
  List,
  ListItemButton,
  Typography,
} from "@mui/material";
import { MouseEvent, useEffect, useState } from "react";
import ChatRoom from "../components/chat-room";
import FileUploader from "../components/file-uploader";

export default function Home() {
  const [rooms, setRooms] = useState<IRoom[]>([]);
  const [files, setFiles] = useState<IFile[]>([]);
  const [roomId, setRoomId] = useState<number | undefined>(undefined);
  const [fileId, setFileId] = useState<number | undefined>(undefined);

  const onSaveFile = (file: IFile) => setFiles((v) => [file, ...v]);

  const handleCreateRoom = async (e: MouseEvent<HTMLElement>) => {
    e.preventDefault();
    try {
      const newRoom = await createRoom();
      setRooms((v) => [newRoom, ...v]);
      setRoomId(newRoom.id);
    } catch (err) {
      console.error(err);
    }
  };

  const handleSelectRoom =
    (id: number | undefined) => (e: MouseEvent<HTMLElement>) => {
      e.preventDefault();
      setRoomId(id);
    };

  const handleSelectFile =
    (id: number | undefined) => (e: MouseEvent<HTMLElement>) => {
      e.preventDefault();
      setFileId(id);
    };

  useEffect(() => {
    (async () => {
      try {
        const rooms = await fetchRooms();
        setRooms(rooms);

        const files = await fetchFiles();
        setFiles(files);
      } catch (err) {
        console.error(err);
      }
    })();
  }, []);

  return (
    <Grid container>
      <Grid item xs={2} sx={{ p: 2 }}>
        <Button fullWidth variant="contained" onClick={handleCreateRoom}>
          New Chat
        </Button>
        <Divider sx={{ my: 2 }} />
        <List>
          {rooms.map((room, i) => (
            <ListItemButton
              selected={roomId === room.id}
              key={i}
              onClick={handleSelectRoom(room.id)}
            >
              {room.created_at?.toString()}
            </ListItemButton>
          ))}
        </List>
      </Grid>

      <Grid item xs={2} sx={{ p: 2 }}>
        <FileUploader onSave={onSaveFile} />
        <Divider sx={{ my: 2 }} />
        <List>
          {files.map((file, i) => (
            <ListItemButton
              selected={fileId === file.id}
              key={i}
              onClick={handleSelectFile(file.id)}
            >
              {file.name}
            </ListItemButton>
          ))}
        </List>
      </Grid>

      <Grid item xs sx={{ p: 2 }}>
        {roomId && fileId ? (
          <ChatRoom roomId={roomId as number} fileId={fileId as number} />
        ) : (
          <Typography>Select one room and one file</Typography>
        )}
      </Grid>
    </Grid>
  );
}
