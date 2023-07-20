# FFSD Frontend
This is the frontend code for the FFSD website. Contains pages for Home, Login, Join, Forgot Password, Reset Password, Member Portal, and 404 page.

To start the application, run `npm i` to install all the dependencies and then `npm start` to run the application. Default port is 3000; navigate to `localhost:3000` to open the application.

# Current flow of member registration:
The current member registration works like this:
- User fills out join for on join page which creates their user in the database
- User is sent email verification which verifies email and logs them in, taking them to a locked member portal with pay now button
- Users cannot login without verifying email
- Users cannot access member portal without having valid subscription (valid_subscription field of user state)
- When user clicks pay now, they are taken to an external Stripe checkout page, which redirects them to the `/after-payment` route, which updates their `valid_subscription`, `expiration_date`, `stripe_id` fields in the database
- User now has access to member portal

# Connecting Stripe:
To connect stripe to the frontend:
- Replace line 5 of `/src/join/payFunction.tsx` with Stripe public key, found in API keys of dashboard
- Replace line 19 of `/src/join/payFunction.tsx` with the correct price ID of the subscription you would like the customer to make.

# Adding new fields to member registration:
- New field must be added to type userT in `/src/store/user.ts`
- New field must be added to line 88 and line 81 (add parameters) of  `/src/store/user.ts`
- New field must be added to join form on line 73 of `/src/join/join.tsx`
- New field must be added to backend, see backend ReadMe

# Adding images:
- Add images in the public folder
- Use in necessary files with `<img src=[path]>`

# Creating new pages:
- Create new folder with the page title
- Create index.tsx file in the folder for easier access to the component
- Create `[page_title].css` in the folder
- Create `[page_title].tsx` in the folder
- Must create a React Component as the page and export it.
- In `index.tsx`:
    import `[Component]` from `./[folder]` in `index.tsx:`
    export default [Component];
- In `/src/router.tsx` import the component from `./[folder]`
- Add new route in `/src/router.tsx` on line 24, passing in route name and Component into `makeRoute()`

# CSS:
Use Developer Tools to see and edit CSS while application is running
