import { test, expect } from "vitest";
import request from "supertest";
import resetUsersTable from "../db/helpers.js"

import app from "../app.js";

test("GET /api/health works", async () => {
    

    const response = await request(app).get("/api/health");
    expect(response.body).toEqual({
        success: true,
        payload: "API is running correctly",
    });
    
    expect(response.status).toEqual(200);
});

test("GET /api/users", async () => {

})