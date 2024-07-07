import React, { useEffect, useState } from "react";
import SkeletonLoading from "./SkeletonLoading";
import { Card, CardContent, Typography } from "@mui/material";

const TestComponant = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate an API call
    setTimeout(() => {
      setData({
        title: "Sample Data Title",
        description: "This is a description of the sample data."
      });
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      {loading ? (
        <SkeletonLoading />
      ) : (
        <Card>
          <CardContent>
            <Typography variant="h5" component="div">
              {data.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {data.description}
            </Typography>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default TestComponant;
