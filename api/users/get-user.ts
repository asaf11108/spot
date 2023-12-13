import { endpoint, request, pathParams, Int64, body, response, String } from "@airtasker/spot";

@endpoint({
  method: "GET",
  path: "/users/:userId",
  tags: ["users"]
})
class GetUsers {
  @request
  request(
    @pathParams
    pathParams: {
      userId: Int64
    },
  ) {}
  
  @response({ status: 201 })
    successfulResponse(
      @body body: User
    ) {}
}

interface User {
  id: Int64;
  name: String;
}