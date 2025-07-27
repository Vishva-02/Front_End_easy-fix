const MapEmbed = () => {
  return (
    <div className="w-full flex justify-center">
      <iframe
        title="Easy Fix Location"
        src="https://www.google.com/maps/embed?pb=..."
        width="100%"           
        height="300"           
        style={{ border: 0, maxWidth: '600px', borderRadius: '12px' }} 
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default MapEmbed;
