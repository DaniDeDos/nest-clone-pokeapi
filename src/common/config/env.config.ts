export const EnvConfig = () => ({
  environment: process.env.NODE_ENV || 'dev',
  mongodb: process.env.MONGODB,
  port: process.env.PORT || 8080,
});

// NOTE: Joi tiene prioridad
// Joi impart valor como sring
// Hacer la conversion Aqui
