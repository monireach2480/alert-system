"use client"

import { useEffect, useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { motion, AnimatePresence } from "framer-motion"
import { toast } from "sonner"
import {
  User, Mail, Phone, MessageSquare,
  Send, CheckCircle2, Loader2, Sparkles,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { inquirySchema, InquiryFormData } from "@/lib/validations"
import { submitInquiry } from "@/lib/api"



function FieldError({ message }: { message?: string }) {
  return (
    <AnimatePresence>
      {message && (
        <motion.p
          initial={{ opacity: 0, y: -4 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -4 }}
          className="text-xs text-destructive mt-1 flex items-center gap-1.5"
        >
          <span className="inline-block w-1 h-1 rounded-full bg-destructive flex-shrink-0" />
          {message}
        </motion.p>
      )}
    </AnimatePresence>
  )
}

export function InquiryForm() {
  const [isSuccess, setIsSuccess] = useState(false)
    useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/health`).catch(() => {})
  }, [])

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<InquiryFormData>({
    resolver: zodResolver(inquirySchema),
  })

  const onSubmit = async (data: InquiryFormData) => {
    try {
      await submitInquiry(data)
      setIsSuccess(true)
      reset()
      toast.success("Inquiry submitted successfully!")
    } catch (error) {
      toast.error(
        error instanceof Error ? error.message : "Something went wrong"
      )
    }
  }

  if (isSuccess) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.97 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex flex-col items-center justify-center py-12 text-center space-y-5"
      >
        <div className="relative">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", delay: 0.1 }}
            className="w-16 h-16 rounded-full bg-secondary flex items-center justify-center ring-1 ring-border"
          >
            <CheckCircle2 className="w-8 h-8 text-foreground" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, type: "spring" }}
            className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-primary flex items-center justify-center ring-2 ring-background"
          >
            <Sparkles className="w-3 h-3 text-primary-foreground" />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="space-y-1.5"
        >
          <h3 className="text-lg font-bold text-foreground">You're all set!</h3>
          <p className="text-muted-foreground text-sm max-w-xs leading-relaxed">
            We've received your inquiry and will get back to you within 24 hours.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <Button variant="outline" size="sm" onClick={() => setIsSuccess(false)}>
            Submit another inquiry
          </Button>
        </motion.div>
      </motion.div>
    )
  }

  return (
    <motion.form
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-4"
    >
      {/* Full Name */}
      <div className="space-y-1.5">
        <Label htmlFor="full_name" className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
          Full Name
        </Label>
        <div className="relative">
          <User className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-muted-foreground pointer-events-none" />
          <Input
            id="full_name"
            placeholder="Len Monireach"
            className="pl-9"
            aria-invalid={!!errors.full_name}
            {...register("full_name")}
          />
        </div>
        <FieldError message={errors.full_name?.message} />
      </div>

      {/* Email */}
      <div className="space-y-1.5">
        <Label htmlFor="email" className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
          Email Address
        </Label>
        <div className="relative">
          <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-muted-foreground pointer-events-none" />
          <Input
            id="email"
            type="email"
            placeholder="you@example.com"
            className="pl-9"
            aria-invalid={!!errors.email}
            {...register("email")}
          />
        </div>
        <FieldError message={errors.email?.message} />
      </div>

      {/* Phone */}
      <div className="space-y-1.5">
        <Label htmlFor="phone" className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
          Phone Number
        </Label>
        <div className="relative">
          <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-muted-foreground pointer-events-none" />
          <Input
            id="phone"
            placeholder="+855 12 345 678"
            className="pl-9"
            aria-invalid={!!errors.phone}
            {...register("phone")}
          />
        </div>
        <FieldError message={errors.phone?.message} />
      </div>

      {/* Message */}
      <div className="space-y-1.5">
        <Label htmlFor="message" className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
          Message
        </Label>
        <div className="relative">
          <MessageSquare className="absolute left-3 top-3 w-3.5 h-3.5 text-muted-foreground pointer-events-none" />
          <Textarea
            id="message"
            placeholder="Tell us how we can help you..."
            rows={4}
            className="pl-9 resize-none"
            aria-invalid={!!errors.message}
            {...register("message")}
          />
        </div>
        <FieldError message={errors.message?.message} />
      </div>

      {/* Submit */}
      <Button type="submit" disabled={isSubmitting} className="w-full" size="lg">
        {isSubmitting ? (
          <>
            <Loader2 className="w-4 h-4 animate-spin" />
            Sending...
          </>
        ) : (
          <>
            <Send className="w-4 h-4" />
            Send Inquiry
          </>
        )}
      </Button>

      <p className="text-center text-xs text-muted-foreground pt-1">
        Our team responds within 24 hours on business days.
      </p>
    </motion.form>
  )
}