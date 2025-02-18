const maskPhoneNumber = (num: string) => {
    const stars = "*** *** *** *"
    const lasttwoDigits = num.split("").slice(num.length-2).join("")
    
    return stars+lasttwoDigits
}

export {maskPhoneNumber}