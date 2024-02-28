import { useEffect, useState } from "react";
import { Box } from "@mui/material";
import { useParams } from "react-router-dom";

import { Videos, ChannelCard } from "./";
import { fetchFromAPI } from "../utils/fetchFromAPI";

const ChannelDetail = () => {
  const [channelDetail, setChannelDetail] = useState(null);
  const [videos, setVideos] = useState([]);
  const { id } = useParams();

  console.log(channelDetail, videos);

  useEffect(() => {
    fetchFromAPI(`channels?part="snippet"&id=${id}`).then((data) =>
      setChannelDetail(data?.items[0])
    );

    fetchFromAPI(`search?channelId=${id}&part=snippet&order=date`).then(
      (data) => setVideos(data?.items)
    );
  }, [id]);

  return (
    <Box minHeight="96vh">
      <div
        style={{
          background:
            "linear-gradient(90deg, rgba(16,209,235,1) 19%, rgba(0,212,255,1) 50%, rgba(208,6,231,1) 100%)",
          zIndex: 10,
          height: "300px",
        }}
      />
      <ChannelCard channelDetail={channelDetail} marginTop="-110px" />
      <Box display="flex" p={2}>
        <Box sx={{ mr: { sm: "100px" } }} />
        <Videos videos={videos} />
      </Box>
    </Box>
  );
};

export default ChannelDetail;
