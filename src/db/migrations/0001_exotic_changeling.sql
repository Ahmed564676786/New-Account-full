CREATE TABLE "accounts"."company" (
	"id" serial PRIMARY KEY NOT NULL,
	"company_name" varchar(255) NOT NULL,
	"email" varchar(255),
	"phone" varchar(50),
	"address" varchar(500),
	"is_active" boolean DEFAULT true NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "accounts"."user-role" (
	"id" serial PRIMARY KEY NOT NULL,
	"role_name" varchar(100) NOT NULL,
	"description" varchar(500),
	"created_at" timestamp DEFAULT now() NOT NULL,
	CONSTRAINT "user-role_role_name_unique" UNIQUE("role_name")
);
--> statement-breakpoint
ALTER TABLE "accounts"."users" ALTER COLUMN "last_name" SET DATA TYPE varchar(100);--> statement-breakpoint
ALTER TABLE "accounts"."users" ADD COLUMN "first_name" varchar(100) NOT NULL;--> statement-breakpoint
ALTER TABLE "accounts"."users" ADD COLUMN "email" varchar(255) NOT NULL;--> statement-breakpoint
ALTER TABLE "accounts"."users" ADD COLUMN "password_hash" varchar(255) NOT NULL;--> statement-breakpoint
ALTER TABLE "accounts"."users" ADD COLUMN "role_id" integer NOT NULL;--> statement-breakpoint
ALTER TABLE "accounts"."users" ADD COLUMN "company_id" integer NOT NULL;--> statement-breakpoint
ALTER TABLE "accounts"."users" ADD COLUMN "is_active" boolean DEFAULT true NOT NULL;--> statement-breakpoint
ALTER TABLE "accounts"."users" ADD COLUMN "created_at" timestamp DEFAULT now() NOT NULL;--> statement-breakpoint
ALTER TABLE "accounts"."users" ADD COLUMN "updated_at" timestamp DEFAULT now() NOT NULL;--> statement-breakpoint
ALTER TABLE "accounts"."users" ADD CONSTRAINT "users_role_id_user-role_id_fk" FOREIGN KEY ("role_id") REFERENCES "accounts"."user-role"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "accounts"."users" ADD CONSTRAINT "users_company_id_company_id_fk" FOREIGN KEY ("company_id") REFERENCES "accounts"."company"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "accounts"."users" DROP COLUMN "user_name";--> statement-breakpoint
ALTER TABLE "accounts"."users" ADD CONSTRAINT "users_email_unique" UNIQUE("email");