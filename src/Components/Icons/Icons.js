import React from "react";

export default function Icons({ icon, className }) {
  const IconComponent = icon;

  return <IconComponent className={className} />;
}
