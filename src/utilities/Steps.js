/*
1. Set the route
2. Set Context Api and check
3. Set authentication
5. Get form data 
6. Authentication
-
7. useeffect observer and logout
8. Private Routing using  -> useLocation() hooks on private component.\
 - used state props -> state={{from: location} replace}
 9. on Login Page -> used useLocation() hook and used 
  - const from = location.state?.from?.pathname || '/'
  - navigate(from, {replace: true}) 

  so that it gets the location from where it came to login page after login

10. problem solution so that it dosen't give error 
    - used loading so that it observe and track the flow
    - used loading on login and logout  


*/