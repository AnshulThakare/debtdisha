def get_user_debt_info():
    print("Welcome to Dept Disha - Smart Debt Payoff Assistant")

    name = input("Enter your name: ")
    income = float(input("Enter your monthly income (in ₹): "))
    total_monthly_expenses = float(input("Enter your total monthly non-debt expenses (in ₹): "))
    
    num_debts = int(input("How many debts do you currently have? "))

    debts = []

    for i in range(num_debts):
        print(f"\nEnter details for Debt #{i+1}")
        lender = input("Lender Name: ")
        balance = float(input("Current Balance (₹): "))
        interest_rate = float(input("Annual Interest Rate (in %): "))
        min_payment = float(input("Minimum Monthly Payment (₹): "))
        
        debts.append({
            "lender": lender,
            "balance": balance,
            "interest_rate": interest_rate,
            "min_payment": min_payment
        })

    strategy = input("\nChoose your debt payoff strategy (snowball/avalanche/custom): ").lower()

    extra_payment = float(input("How much extra can you pay per month towards your debt? (₹): "))

    user_data = {
        "name": name,
        "income": income,
        "expenses": total_monthly_expenses,
        "debts": debts,
        "strategy": strategy,
        "extra_payment": extra_payment
    }

    return user_data

# Example usage:
if __name__ == "__main__":
    user_data = get_user_debt_info()
    print("\nCollected User Data:")
    for key, value in user_data.items():
        print(f"{key.capitalize()}: {value}")
