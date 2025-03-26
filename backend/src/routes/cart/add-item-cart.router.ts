// import exprees, { NextFunction, Request, Response } from "express";
// import {
//   BadRequestError,
//   NotFoundError,
//   currentUserMiddleware,
//   requireAuthMiddleware,
// } from "../../common/src";
// import { Product } from "../../models/Product";
// import { Cart } from "../../models/Cart";
// import { User } from "../../models/User";
// import { expirationQueue } from "../../services/expiration-queue.service";

// const router = exprees.Router();

// router.post(
//   "/api/cart/add-item",
//   currentUserMiddleware,
//   requireAuthMiddleware,
//   async (req: Request, res: Response, next: NextFunction) => {
//     try {
//       const { productId, quantity } = req.body;


//       const product = await Product.findById(productId);


//       if (!product) {
//         throw new NotFoundError("Product not found");
//       }


//       if (!product.available) {
//         throw new NotFoundError("Product is out of stock");
//       }


//       if (quantity > product.avaliableQuantity && product.available) {
//         throw new BadRequestError("Requested quantity is not available");
//       }


//       if (quantity <= 0) {
//         throw new BadRequestError("Invalid quantity");
//       }


//       if (quantity === product.avaliableQuantity) {
//         product.set({
//           available: false,
//           reservedQuantity: product.reservedQuantity + quantity,
//           avaliableQuantity: product.avaliableQuantity - quantity,
//         });
//         await product.save();
//       }


//       if (quantity < product.avaliableQuantity && product.available) {
//         product.set({
//           reservedQuantity: product.reservedQuantity + quantity,
//           avaliableQuantity: product.avaliableQuantity - quantity,
//         });
//         await product.save();
//       }


//       const cart = await Cart.findOne({
//         $and: [
//           { userId: req.currentUser!.id },
//           { orderId: null },
//           { expired: false },
//         ],
//       });

//       if (!cart) {

//         const user = await User.findById(req.currentUser!.id);

//         if (!user) {
//           throw new NotFoundError("User not found");
//         }

     
//         if (user.cart.length === 0) {

//           const newCart = Cart.build({
//             userId: req.currentUser!.id,
//             products: [{ productId: product._id as string, quantity: quantity }],
//           });

//           user.set({
//             cart: [newCart._id],
//           });

//           const job = await expirationQueue.add(
//             { cartId: newCart._id, userId: user.id },
//             {

//               delay: 1800000,
//             }
//           );

//           newCart.set({
//             jobId: job.id,
//           });

//           await Promise.all([user.save(), newCart.save()]);
//           res.status(200).json(newCart);
//         }
//       } else if (cart.products.length > 0) {
//         const existingProduct = cart.products.find(
//           (el) => el.productId === product._id.toString()
//         );

//         if (existingProduct) {
//           existingProduct.quantity += quantity;
//         } else {
//           cart.products.push({ productId: product._id, quantity });
//         }

//         await cart.save();
//         res.status(200).json(cart);
//       } else {

//         cart.set({
//           products: [...cart.products, { productId: product._id, quantity }],
//         });
//         await cart.save();
//         res.status(200).json(cart);
//       }
//     } catch (error) {
//       next(error);
//     }
//   }
// );

// export { router as addToCartRouter };
