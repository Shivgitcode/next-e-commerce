-- AlterTable
ALTER TABLE "CartItem" ALTER COLUMN "quantity" DROP NOT NULL,
ALTER COLUMN "productId" DROP NOT NULL,
ALTER COLUMN "productId" SET DATA TYPE TEXT;