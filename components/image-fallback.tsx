import React, { useState, useEffect } from "react";
import { View, Image, Text, StyleSheet } from "react-native";

interface ImageWithFallbackProps {
  src?: string; // `src` có thể undefined
  alt: string;
  style?: object; // Use style instead of className
}

const ImageWithFallback: React.FC<ImageWithFallbackProps> = ({
  src,
  alt,
  style = styles.image, // Default style for the image
}) => {
  const [imgError, setImgError] = useState(false);

  useEffect(() => {
    if (!src) {
      setImgError(true);
    }
  }, [src]);

  const handleImageError = () => {
    setImgError(true);
  };

  return (
    <>
      {!imgError ? (
        <Image
          source={{ uri: src }}
          alt={alt}
          style={style}
          onError={handleImageError}
          resizeMode="cover" // Adjust the resize mode as necessary
        />
      ) : (
        <View style={styles.fallbackContainer}>
          {/* <Frown size={32} color="#B0BEC5" />{" "} */}
          {/* Adjust the size and color as needed */}
          <Text style={styles.fallbackText}>Failed to load image.</Text>
        </View>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: "100%",
    borderRadius: 12,
  },
  fallbackContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#f0f0f0", // Replace with your secondary color
    borderRadius: 12,
  },
  fallbackText: {
    marginTop: 8,
    color: "#757575", // Replace with your muted foreground color
  },
});

export default ImageWithFallback;
