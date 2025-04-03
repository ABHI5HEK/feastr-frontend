import { Card, CardContent, CardMedia, Typography } from '@mui/material';

const RecommendationCard = ({ data }) => {
  return (
    <Card sx={{ width: 150, height: 150, display: 'flex', 
        flexShrink: 0,
    margin:'5px', flexDirection: 'column', borderRadius: '16px', boxShadow: 3 }}>
      {/* Image at the top */}
      <CardMedia
        component="img"
        height="75"
        image={data.imageUrl} // Use the public URL for local images
        alt={data.title}
        sx={{ borderTopLeftRadius: '16px', borderTopRightRadius: '16px', objectFit: 'cover' }}
      />

      {/* Card content at the bottom */}
      <CardContent sx={{ padding:1}}>
        <Typography variant="subtitle" align='left' component="div" sx={{ fontWeight: 'bold', color: '#2f4858' }}>
          {data.title}
        </Typography>
        <Typography variant="body2" align='left' color="text.secondary" sx={{ fontSize: '0.5rem' }}>
          {data.type} | {data.city}, {data.state}
        </Typography>
        <Typography variant="body2" align='right' sx={{ fontSize: '0.8rem', color: '#FF6B6B' }}>
          Rating: {data.rating} / 5
        </Typography>
      </CardContent>
    </Card>
  );
};




export default RecommendationCard;
