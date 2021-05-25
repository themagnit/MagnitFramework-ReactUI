import React from "react";
import ReadMoreReact from "read-more-react";
import { Typography } from "@material-ui/core";


const ReadMore = ({ data , width}) => {

  return (
    <ReadMoreReact
      text={data}
      min={width}
      ideal={width}
      max={90}
      readMoreText={
        <Typography color="textSecondary" variant="body1">
          ...Read More
        </Typography>
      }
    />
  );
};

export default ReadMore;
