<?php
require_once '../db.php';
$action = $_GET['act'];

$product_id = $_POST['idHint'];
$quantity = $_POST['quantity'];

switch($action){

	case 'create':
        $qry = "SELECT * FROM product WHERE product_id = '{$product_id}'";
        $result = mysql_query($qry);
        $row = mysql_fetch_array($result);
        $name = $row['name'];
        $unit_price = $row['product_price'];
    
        $query = "INSERT INTO `product_cart`
				  SET  product_id = '{$product_id}',
                       quantity = '{$quantity}',
                       name = '{$name}',
                       unit_price = '{$unit_price}'
                       ";
                      
      if(mysql_query($query))
		{ 
		  echo "data";
		}
	        

	break;
 }

$get_qry = "SELECT * FROM product_cart ORDER BY sl_no DESC";
$get_result = mysql_query($get_qry);
$get_row = mysql_fetch_array($get_result);

$sl_no = $get_row['sl_no'];
$product_id = $get_row['product_id'];
$quantity = $get_row['quantity'];
$name = $get_row['name'];
$unit_price = $get_row['unit_price'];
$amount = $quantity * $unit_price; 

?>

<tr id="record" class="bar<?php echo $sl_no; ?>">
    <td><?php echo $sl_no; ?></td>
    <td><?php echo $name; ?></td>
    <td><input type="text" name="qty_<?php echo $sl_no; ?>"  id="qty_<?php echo $sl_no; ?>" value="<?php echo $quantity; ?>" style="width: 27px; height: 20px;"/></td>
    <td id="unit_price_<?php echo $sl_no; ?>"><?php echo $unit_price; ?></td>
    <td><input type="text" name="amount_<?php echo $sl_no; ?>" id="amount_<?php echo $sl_no; ?>" value="<?php echo $amount; ?>" readonly="readonly" /></td>
    <td><span class="delete_button"><a href="#" id="<?php echo $sl_no; ?>" class="delete_update">X</a></span> </td>
</tr>
                    
