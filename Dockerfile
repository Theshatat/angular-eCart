FROM node:24

WORKDIR /DockerApp
# SOURCE CODE -> COPY FROM AND PASTE TO ROOT BECAUSE THEY ARE IN THE SME LEVEL.
COPY . .  

# dependencies.
RUN npm install

#specify which port to expose the container.

EXPOSE 4200
# run the app

CMD ["npm", "start"]