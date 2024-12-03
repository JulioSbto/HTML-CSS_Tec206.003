using Microsoft.Data.SqlClient;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

string connectionString = "Server=LUCCAS\\SQLEXPRESS;DATABASECadastroDelmoveis; Integrated Security=True;";

app.MapGet("/imoveis", async (HttpContext context) =>
{
    List<Imoveis> imoveis = new List<Imoveis>();

    using SqlConnection connection = new SqlConnection(connectionString);

    string query = "SELECT idImoveis, tipoimoveis, endereco, numeroquartos,numerobanheiro FROM Imovei-s";
    using SqlCommand command = new SqlCommand(query, connection);

        await connection.OpenAsync();

    using SqlDataReader reader = await command.ExecuteReaderAsync();

    while (await reader.ReadAsync())
    {
        imoveis.Add(new Imoveis
        {
            idImoveis = reader.GetInt32(0),
            Tipoimoveis = reader.GetString(1),
            Endereco = reader.GetString(2),
            NumeroQuartos = reader.GetInt32(3),
            NumeroBanheiro = reader.GetInt32(4),
        });
    }

    return Results.Ok(imoveis);
});

app.MapGet("/imoveis/{id:int}", async (int id) =>
{
    using (SqlConnection connection = new SqlConnection(connectionString))
    {
        string query = "SELECT id, tipo, endereco, numeroquartos, numerobanheiro FROM Imoveis WHERE id = @ID";
        using (SqlCommand command = new SqlCommand(query, connection))
        {
            command.Parameters.AddWithValue("@ID", id);

            await connection.OpenAsync();

            using (SqlDataReader reader = await command.ExecuteReaderAsync())
            {
                if (await reader.ReadAsync())
                {
                    var imoveis = new Imoveis
                    {
                        idImoveis = reader.GetInt32(0),
                        Tipoimoveis = reader.GetString(1),
                        Endereco = reader.GetString(2),
                        NumeroQuartos = reader.GetInt32(3),
                        NumeroBanheiro = reader.GetInt32(4)
                    };

                    return Results.Ok(imoveis);
                }
            }
        }
    }

    return Results.NotFound();
});

app.MapPost("/imoveis", async (Imoveis imoveis) =>
{
    using (SqlConnection connection = new SqlConnection(connectionString))
    {
        string query = "INSERT INTO Imoveis (tipoimoveis, endereco, numero_quartos, numero_banheiro) " +
                       "VALUES (@Tipoimoveis, @Endereco, @NumeroQuartos, @NumeroBanheiro);";
        using (SqlCommand command = new SqlCommand(query, connection))
        {
            command.Parameters.AddWithValue("@Tipo", imoveis.Tipoimoveis);
            command.Parameters.AddWithValue("@Endereco", imoveis.Endereco);
            command.Parameters.AddWithValue("@NumeroQuartos", imoveis.NumeroQuartos);
            command.Parameters.AddWithValue("@NumeroBanheiro", imoveis.NumeroBanheiro);

            await connection.OpenAsync();
            
            int id = Convert.ToInt32 (await command.ExecuteScalarAsync());
           return Results.Created($"/imoveis/{id}", imoveis);
        }
    }
});

app.MapPut("/imoveis/{id:int}", async (int id, Imoveis imoveis) =>
{
    using (SqlConnection connection = new SqlConnection(connectionString))
    {
        string query = "UPDATE Imoveis SET tipoimoveis = @Tipoimoveis, endereco = @Endereco, numero_quartos = @NumeroQuartos, " +
                       "numero_banheiro = @NumeroBanheiro WHERE id = @Id";
        using (SqlCommand command = new SqlCommand(query, connection))
        {
            command.Parameters.AddWithValue("@IdImoveis", id);
            command.Parameters.AddWithValue("@Tipoimoveis", imoveis.Tipoimoveis);
            command.Parameters.AddWithValue("@Endereco", imoveis.Endereco);
            command.Parameters.AddWithValue("@NumeroQuartos", imoveis.NumeroQuartos);
            command.Parameters.AddWithValue("@NumeroBanheiro", imoveis.NumeroBanheiro);

            await connection.OpenAsync();

            int rowsAffected = await command.ExecuteNonQueryAsync();

            return rowsAffected > 0 ? Results.NoContent() : Results.NotFound();
        }
    }
});

app.MapDelete("/imoveis/{id:int}", async (int id) =>
{
    using (SqlConnection connection = new SqlConnection(connectionString))
    {
        string query = "DELETE FROM Imoveis WHERE id = @Id";
        using (SqlCommand command = new SqlCommand(query, connection))
        {
            command.Parameters.AddWithValue("@Id", id);

            await connection.OpenAsync();

            int rowsAffected = await command.ExecuteNonQueryAsync();

            return rowsAffected > 0 ? Results.NoContent() : Results.NotFound();
        }
    }
});

app.Run();
public class Imoveis
{
    public int idImoveis { get; set; }
    public required string Tipoimoveis { get; set; }
    public required string Endereco { get; set; }
    public int NumeroQuartos { get; set; }
    public int NumeroBanheiro { get; set; }
}




