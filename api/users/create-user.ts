import { endpoint, request, body, response, String } from "@airtasker/spot";

@endpoint({
    method: "POST",
    path: "/users"
  })
  class CreateUser {
    @request
    request(
      @body body: CreateUserRequest
    ) {}
  
    @response({ status: 201 })
    successfulResponse(
      @body body: CreateUserResponse
    ) {}
  }
  
  interface CreateUserRequest {
    firstName: String;
    lastName?: String;
  }
  
  interface CreateUserResponse {
    firstName: String;
    lastName: String;
    role: String;
  }