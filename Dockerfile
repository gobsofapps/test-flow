#
# ---- Base Node ----
FROM alpine:3.5 AS base
RUN apk add --no-cache nodejs-current
WORKDIR /usr/src/app
COPY package*.json ./

#
# ---- Dependencies ----
FROM base AS dependencies
RUN npm set progress=false && npm config set depth 0
RUN npm install --only=production
RUN cp -R node_modules prod_node_modules
RUN npm install

#
# ---- Build ----
FROM dependencies AS build
COPY . .
RUN npm run build


#
# ---- Release ----
FROM base AS release
COPY --from=dependencies /usr/src/app/prod_node_modules ./node_modules
COPY --from=build /usr/src/app/dist ./dist
COPY . .
EXPOSE 3000
CMD [ "npm", "start" ]
