Proveedor{**RFCP**, RazonSocial, Domicilio, Contacto}
PK -> {**RFCP**}
FK -> N/A
AK -> {RazonSocial}

Productos{**CBarras**,Nombre,Descripción,Precio,Existencia}
PK -> {**CBarras**}
FK -> N/A
AK -> N/A

Facturas{**NoFac**,Fecha,Status}
PK -> {**NoFac**}
FK -> N/A
AK -> {Fecha}

Cliente{**RFCC**,RazonSocial,Domicilio}
PK -> {**RFCC**}
FK -> N/A
AK -> {RazonSocial}

---- Relaciones ----
Surte{**RFCP,CBarras,Fecha**,Cantidad}
PK -> {**RFCP,CBarras, Fecha**}
FK -> {_RFCP_} Ref Proveedor
FK -> {_CBarras_} Ref Productos
AK -> N/A

Venta {**CBarras,NoFac**,Cantidad}
PK -> {**CBarras,NoFac**}
FK -> {_Productos_} Ref Proveedor
FK -> {_NoFac_} Ref Facturas
AK ->  N/A