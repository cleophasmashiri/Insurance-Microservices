Steps 
0. Add reference resources.
    (a) https://docs.microsoft.com/en-us/learn/modules/build-web-api-net-core/1-introduction.
    (b) https://medium.com/@maxalmonte14/starting-with-net-core-in-linux-tdd-style-e214153b8c7b.
    (c) https://www.nuget.org/packages/NFluent/.
    (d) https://www.codingame.com/playgrounds/35462/creating-web-api-in-asp-net-core-2-0/part-1---web-api.
    (e) https://docs.microsoft.com/en-us/aspnet/core/tutorials/web-api-help-pages-using-swagger?view=aspnetcore-3.0.

1. Run dotnet new webapi -n InsurancePolicyApi
2. Add Models. InsurancePolicy, InsurancePolicyRepository and InsurancePolicyController.
(a) dotnet add Todolist package Microsoft.EntityFrameworkCore.Sqlite --version 2.1.4
(b) dotnet add package Swashbuckle.AspNetCore -v 5.0.0-rc4
3. Add Swagger and test api.
4. dotnet ef migrations add InitialCreate
   dotnet ef database update
