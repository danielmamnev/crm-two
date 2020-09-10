CREATE TABLE "customer" (
	"id" SERIAL NOT NULL,
	"firstname" VARCHAR(255) NOT NULL,
	"lastname" VARCHAR(255) NULL DEFAULT NULL,
	"phone" VARCHAR(255) NULL DEFAULT NULL,
	"email" VARCHAR(255) NULL DEFAULT NULL,
	"addressone" VARCHAR(255) NULL DEFAULT NULL,
	"addresstwo" VARCHAR(255) NULL DEFAULT NULL,
	"city" VARCHAR(255) NULL DEFAULT NULL,
	"stateaddress" VARCHAR(255) NULL DEFAULT NULL,
	"zip" VARCHAR(255) NULL DEFAULT NULL,
	PRIMARY KEY ("id")
)
;
COMMENT ON COLUMN "customer"."id" IS '';
COMMENT ON COLUMN "customer"."firstname" IS '';
COMMENT ON COLUMN "customer"."lastname" IS '';
COMMENT ON COLUMN "customer"."phone" IS '';
COMMENT ON COLUMN "customer"."email" IS '';
COMMENT ON COLUMN "customer"."addressone" IS '';
COMMENT ON COLUMN "customer"."addresstwo" IS '';
COMMENT ON COLUMN "customer"."city" IS '';
COMMENT ON COLUMN "customer"."stateaddress" IS '';
COMMENT ON COLUMN "customer"."zip" IS '';
